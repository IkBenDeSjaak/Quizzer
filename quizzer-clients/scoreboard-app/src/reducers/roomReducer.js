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
  return { type: "receivedAnswer", answer, teamid };
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
      });
  };
}

// reducer
const initialRoomState = {
  teams: [
    {
      teamid: "Dog",
      answer: "Something"
    },
  ],
  questionAmount: null,
  lastQuestionid: null,
  roundAmount: null,
  teamsAmount: null,
  lastQuestion: null,
  lastAnswer: null,
  lastCategory: null,
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
      const receivedAnswerChanges = {
        teams: [
          ...state.teams,
          { teamid: action.teamid, answer: action.answer.answer },
        ],
      };
      return { ...state, ...receivedAnswerChanges };

    default:
      return state;
  }
}
