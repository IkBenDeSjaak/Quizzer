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

export function nextQuestionAction() {
  return { type: "nextQuestionAction" };
}

export function closeQuestionAction() {
  return { type: "closeQuestionAction" };
}

export function endRoundAction() {
  return { type: "endRoundAction" };
}

export function endQuizAction() {
  return { type: "endQuizAction" };
}

export function clearRound() {
  return { type: "clearRound" };
}

const initialRoundState = {
  questionAmount: null,
  questionid: null,
  roundAmount: null,
  teamsAmount: null,
  question: null,
  answer: null,
  category: null,
  endRound: false,
  closeQuestion: false,
};

export function roundReducer(state = initialRoundState, action) {
  switch (action.type) {
    case "receivedRoominfo":
      const receivedRoomInfoChanges = {
        questionAmount: action.roominfo.question,
        questionid: action.roominfo.lastQuestionid,
        roundAmount: action.roominfo.round,
        teamsAmount: action.roominfo.teams,
      };
      return { ...state, ...receivedRoomInfoChanges };

    case "receivedQuestion":
      const receivedQuestionChanges = {
        question: action.question.question,
        answer: action.question.answer,
        category: action.question.category,
      };
      return { ...state, ...receivedQuestionChanges };

    case "nextQuestionAction":
      return { ...state, ...initialRoundState };

    case "closeQuestionAction":
      const closeQuestionChanges = {
        closeQuestion: true,
      };
      return { ...state, ...closeQuestionChanges };

    case "endRoundAction":
      const endRoundChanges = {
        endRound: !state.endRound,
        closeQuestion: false,
      };
      return { ...state, ...endRoundChanges };

    case "endQuizAction":
      const endQuizChanges = {
        endQuiz: !state.nextRound,
      };
      return { ...state, ...endQuizChanges };

    case "clearRound":
      return { ...state, ...initialRoundState };

    default:
      return state;
  }
}
