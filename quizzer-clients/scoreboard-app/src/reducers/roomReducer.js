import { login } from "../ws";

const api = "http://localhost:3000";

// action creators
export function roomJoined() {
  return { type: "roomJoined" };
}

// TODO: look at how this gets roomid
// preferably you'd have a editingRoomid
export function joinRoom(roomid) {
  return async (dispatch) => {
    const loginPromise = new Promise(function (resolve, reject) {
      resolve(login(roomid));
    });
    return loginPromise.then(() => {
      dispatch(roomJoined());
    });
  };
}

export function editRoomidAction(roomid) {
  return { type: "editRoomidAction", roomid };
}

export function onConnectAction() {
  return { type: "onConnectAction" };
}

export function onNewQuestionAction() {
  return { type: "onNewQuestionAction" };
}

export function stopLoadingAction() {
  return { type: "stopLoadingAction" };
}

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
      .catch((err) => console.error("Error: ", err));
  };
}

export function closeQuestionAction() {
  return { type: "closeQuestionAction" };
}

export function nextQuestionAction() {
  return { type: "nextQuestionAction" };
}

export function endRoundAction() {
  return { type: "endRoundAction" };
}

export function receivedPoints(points) {
  return { type: "receivedPoints", points };
}

export function fetchPoints(roomid, teamid) {
  return async (dispatch) => {
    return await fetch(
      api + "/rooms/" + roomid + "/teams/" + teamid + "/score",
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((points) => {
        dispatch(receivedPoints(points));
      })
      .catch((err) => console.error("Error: ", err));
  };
}

export function endQuizAction() {
  return { type: "endQuizAction" };
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
  endRound: false,
  teamPoints: [],
  rounds: [],
  endQuiz: false,
  roomid: null,
  connected: null,
  stopLoading: null,
};

export function roomReducer(state = initialRoomState, action) {
  switch (action.type) {
    case "onNewQuestionAction":
      const onNewQuestionChanges = {
        stopLoading: true,
      };
      return { ...state, ...onNewQuestionChanges };

    case "stopLoadingAction": {
      const stopLoadingChanges = {
        stopLoading: false,
      };
      return { ...state, ...stopLoadingChanges };
    }

    case "roomJoined":
      return { ...state };

    case "editRoomidAction":
      return { ...state, roomid: action.roomid };

    case "onConnectAction":
      const onConnectChanges = {
        connected: true,
      };
      return { ...state, ...onConnectChanges };

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
        endRound: false,
        teamPoints: [],
        rounds: [],
        endQuiz: false,
        stopLoading: null,
      };
      return { ...state, ...nextQuestionChanges };

    case "endRoundAction": {
      const endRoundChanges = {
        endRound: !state.endRound,
        closeQuestion: false,
      };
      return { ...state, ...endRoundChanges };
    }

    case "receivedPoints": {
      const receivedPointsChanges = {
        teamPoints: [
          ...state.teamPoints,
          {
            roundPoints: action.points.roundPoints,
          },
        ],
        rounds: [
          ...state.rounds,
          {
            ...action.points.rounds,
          },
        ],
      };
      return { ...state, ...receivedPointsChanges };
    }

    case "endQuizAction": {
      const endQuizChanges = {
        endQuiz: !state.nextRound,
      };
      return { ...state, ...endQuizChanges };
    }

    default:
      return state;
  }
}
