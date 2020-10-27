import { sendMessage } from "../ws";
import { nextPageAction } from "./roomReducer";

const api = "http://localhost:3000";
// action creators
export function receivedRoomInfo(roominfo) {
  return { type: "receivedRoominfo", roominfo };
}

export function fetchRoomInfo() {
  return async (dispatch, getState) => {
    let state = getState();
    return await fetch(api + "/rooms/" + state.room.roomid, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
    })
      .then((response) => response.json())
      .then((roominfo) => {
        dispatch(receivedRoomInfo(roominfo));
      });
  };
}

export function receivedQuestion(question) {
  return { type: "receivedQuestion", question };
}

export function fetchQuestion(questionid) {
  return async (dispatch) => {
    return await fetch(api + "/questions/" + questionid, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
    })
      .then((response) => response.json())
      .then((question) => {
        dispatch(receivedQuestion(question));
      });
  };
}

export function editAnswer(answer) {
  return { type: "editAnswer", answer };
}

export function submitAnswer() {
  return async (dispatch, getState) => {
    let state = getState();
    const data = {
      answer: state.round.tempAnswer,
    };
    return await fetch(
      api +
        "/rooms/" +
        state.room.roomid +
        "/teams/" +
        state.room.teamName +
        "/answers",
      {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then(() => {
        sendMessage(
          "NEW_ANSWER",
          state.room.roomid,
          state.room.teamName,
          state.round.questionid
        );
        dispatch(nextPageAction(true));
      })
      .catch((err) => console.error("Error: ", err));
  };
}

export function closeQuestion() {
  return { type: "closeQuestion" };
}

export function receivedAnswer(answer) {
  return { type: "receivedAnswer", answer };
}

export function fetchAnswer() {
  return async (dispatch, getState) => {
    let state = getState();
    return await fetch(
      api +
        "/rooms/" +
        state.room.roomid +
        "/teams/" +
        state.room.teamName +
        "/answers/" +
        state.round.questionid,
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((answer) => {
        dispatch(receivedAnswer(answer));
      })
      .catch((err) => console.error("Error: ", err));
  };
}

export function clearRound() {
  return { type: "clearRound" };
}

const initialRoundState = {
  questionAmount: null,
  questionid: null,
  roundAmount: null,
  question: null,
  category: null,
  tempAnswer: null,
  answer: null,
  isCorrect: null,
  questionClosed: null,
};

export function roundReducer(state = initialRoundState, action) {
  switch (action.type) {
    case "receivedRoominfo":
      const receivedRoomInfoChanges = {
        questionAmount: action.roominfo.question,
        questionid: action.roominfo.lastQuestionid,
        roundAmount: action.roominfo.round,
      };
      return { ...state, ...receivedRoomInfoChanges };

    case "receivedQuestion":
      const receivedQuestionChanges = {
        question: action.question.question,
        category: action.question.category,
      };
      return { ...state, ...receivedQuestionChanges };

    case "editAnswer":
      return { ...state, tempAnswer: action.answer };

    case "closeQuestion":
      return { ...state, answer: state.tempAnswer, tempAnswer: null, questionClosed: true };

    case "receivedAnswer":
      return { ...state, isCorrect: action.answer.isCorrect };

    case "clearRound":
      return { ...state, ...initialRoundState };

    default:
      return state;
  }
}
