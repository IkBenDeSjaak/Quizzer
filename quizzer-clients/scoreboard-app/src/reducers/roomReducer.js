import { login } from "../ws";

const api = "http://localhost:3000";

// action creators
export function nextPageAction(status) {
  return { type: "nextPageAction", status };
}

export function editRoomidAction(roomid) {
  return { type: "editRoomidAction", roomid };
}

export function roomJoined() {
  return { type: "roomJoined" };
}

export function joinRoom(roomid) {
  return async (dispatch, getState) => {
    let state = getState();
    const loginPromise = new Promise(function (resolve, reject) {
      resolve(login(state.room.tempRoomid));
    });
    return loginPromise.then(() => {
      dispatch(roomJoined());
    });
  };
}

export function newTeamAnswer(teamid) {
  return { type: "newTeamAnswer", teamid };
}

export function receivedAnswer(answer, teamid) {
  return (dispatch, getState) => {
    const state = getState();
    let update = null;
    let index = null;

    if (state.room.teams !== null) {
      state.room.teams.map((team, i) => {
        if (team.teamid === teamid) {
          update = true;
          index = i;
        }
        return update;
      });
    }
    console.log("update ", update);

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

export function clearTeamAction() {
  return { type: "clearTeamAction" };
}

// reducer
const initialRoomState = {
  nextPage: false,
  tempRoomid: null,
  roomid: null,
  tempTeams: [],
  teams: [],
};

export function roomReducer(state = initialRoomState, action) {
  switch (action.type) {
    case "clearTeamAction":
      return { ...state, tempTeams: [], teams: [] };

    case "nextPageAction":
      return { ...state, nextPage: action.status };

    case "editRoomidAction":
      return { ...state, tempRoomid: action.roomid };

    case "roomJoined":
      return { ...state, roomid: state.tempRoomid, tempRoomid: null };

    case "newTeamAnswer":
      if (state.tempTeams.includes(action.teamid)) {
        return { ...state };
      } else {
        return { ...state, tempTeams: [...state.tempTeams, action.teamid] };
      }

    case "receivedAnswer":
      let receivedAnswerChanges;
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
        receivedAnswerChanges = {
          teams: [
            ...state.teams,
            {
              teamid: action.teamid,
              answer: action.answer.answer,
              isCorrect: action.answer.isCorrect,
            },
          ],
        };

        // check if team exists, if so change the isCorrect
        // or check if isCorrect exists and then only add that?
        return { ...state, ...receivedAnswerChanges };
      }

    default:
      return state;
  }
}
