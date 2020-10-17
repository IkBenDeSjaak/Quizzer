const api = "http://localhost:3000";

// action creators
export function receivedRoomInfo(roominfo) {
  return { type: "receivedRoomInfo", roominfo };
}

export function fetchRoomInfo(roomid) {
  return async (dispatch) => {
    return await fetch(api + "/rooms/" + roomid, {
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

export function receivedAnswer(answer, teamid) {
  return (dispatch, getState) => {
    const state = getState();
    let update = null;
    let index = null;

    state.room.teams.map((team, i) => {
      if (team.teamid === teamid) {
        update = true;
        index = i;
      }
      return "hey";
    });

    dispatch({
      type: "receivedAnswer",
      answer,
      teamid,
      update,
      index,
    });
  };
}

export function fetchAnswer(roomid, teamid, questionid) {
  return async (dispatch) => {
    return await fetch(
      api + "/rooms/" + roomid + "/teams/" + teamid + "/answers/" + questionid,
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((answer) => {
        dispatch(receivedAnswer(answer, teamid));
      })
      .catch((err) => console.error("Error: ",err))
  };
}

export function closeQuestionAction() {
  return { type: "closeQuestionAction" };
}

export function nextQuestionAction() {
  return { type: "nextQuestionAction" };
}

// reducer
const initialRoomState = {
  teams: [],
  questionAmount: null,
  lastQuestionid: null,
  roundAmount: null,
  teamsAmount: null,
  lastQuestion: null,
  lastAnswer: null,
  lastCategory: null,
  closeQuestion: null,
};

export function roomReducer(state = initialRoomState, action) {
  switch (action.type) {
    case "receivedRoomInfo":
      const receivedRoomChanges = {
        questionAmount: action.roominfo.question,
        lastQuestionid: action.roominfo.lastQuestionid,
        roundAmount: action.roominfo.round,
        teamsAmount: action.roominfo.teams,
      };
      return { ...state, ...receivedRoomChanges };

    case "receivedQuestion":
      const receivedQuestionChanges = {
        lastQuestion: action.question.question,
        lastAnswer: action.question.answer,
        lastCategory: action.question.category,
      };
      return { ...state, ...receivedQuestionChanges };

    case "receivedAnswer":
      if (action.update === true) {
        return {
          ...state,
          teams: [
            ...state.teams.slice(0, action.index),
            {
              teamid: action.teamid,
              answer: action.answer.answer,
              isCorrect: action.answer.isCorrect,
            },
            ...state.teams.slice(action.index + 1),
          ],
        };
      } else {
        let receivedAnswerChanges = {
          teams: [
            ...state.teams,
            {
              teamid: action.teamid,
              answer: action.answer.answer,
              isCorrect: action.answer.isCorrect,
            },
          ],
        };
        return { ...state, ...receivedAnswerChanges };
      }

    case "closeQuestionAction":
      const closeQuestionChanges = {
        closeQuestion: true,
      };
      return { ...state, ...closeQuestionChanges };

    case "nextQuestionAction":
      const nextQuestionChanges = {
        teams: [],
        questionAmount: null,
        lastQuestionid: null,
        roundAmount: null,
        teamsAmount: null,
        lastQuestion: null,
        lastAnswer: null,
        lastCategory: null,
        closeQuestion: null,
      };
      return { ...state, ...nextQuestionChanges };

    default:
      return state;
  }
}
