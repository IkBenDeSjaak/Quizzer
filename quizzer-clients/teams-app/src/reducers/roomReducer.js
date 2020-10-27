import { login, sendMessage } from "../ws";

const api = "http://localhost:3000";

// action creators
export function nextPageAction(status) {
  return { type: "nextPageAction", status };
}

export function editRoomidAction(roomid) {
  return { type: "editRoomidAction", roomid };
}

export function editTeamNameAction(teamName) {
  return { type: "editTeamNameAction", teamName };
}

export function addTeam() {
  return async (dispatch, getState) => {
    let state = getState();
    const data = {
      teamName: state.room.tempTeamName,
    };
    return await fetch(api + "/rooms/" + state.room.roomid + "/teams/", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        sendMessage("NEW_TEAM", state.room.roomid, state.room.tempTeamName);
        dispatch(nextPageAction(true));
      })
      .catch((err) => console.error("Error: ", err));
  };
}

export function roomJoined() {
  return { type: "roomJoined" };
}

export function joinRoom() {
  return async (dispatch, getState) => {
    let state = getState();

    var exists = false;

    await fetch(api + "/rooms/" + state.room.tempRoomid + "/teams", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        response.forEach((team) => {
          if (team.name === state.room.tempTeamName) {
            exists = true;
          }
        })
      })

    if (exists === false) {
      await login(state.room.tempRoomid)
      dispatch(roomJoined())
    }
  };
}

export function approvedAction() {
  return { type: "approvedAction" };
}

export function disapprovedAction() {
  return { type: "disapprovedAction" };
}

export function teamApproved() {
  return async (dispatch, getState) => {
    let state = getState();
    return await fetch(api + "/rooms/" + state.room.roomid + "/teams", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let exists = false;
        response.forEach((team) => {
          if (team.name === state.room.tempTeamName) {
            exists = true;
            if (team.isApproved === true) {
              dispatch(approvedAction());
            }
          }
        });
        if (!exists) {
          dispatch(disapprovedAction());
        }
      })
      .catch((err) => console.error("Error: ", err));
  };
}

export function retrievedPoints(points) {
  const roundPoints = points.roundPoints;
  return { type: "endQuiz", roundPoints };
}

export function endQuiz() {
  return async (dispatch, getState) => {
    let state = getState();
    console.log(
      api +
      "/rooms/" +
      state.room.roomid +
      "/teams/" +
      state.room.teamName +
      "/score",
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
      }
    );
    return await fetch(
      api +
      "/rooms/" +
      state.room.roomid +
      "/teams/" +
      state.room.teamName +
      "/score",
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((points) => {
        dispatch(retrievedPoints(points));
      })
      .catch((err) => console.error("Error: ", err));
  };
}

export function clearRoom() {
  return { type: "clearRoom" };
}

// reducer
const initialRoomState = {
  nextPage: false,
  tempRoomid: null,
  tempTeamName: null,
  roomid: null,
  teamName: null,
  quizEnded: null,
  points: 0,
};

export function roomReducer(state = initialRoomState, action) {
  switch (action.type) {
    case "clearTeamAction":
      return { ...state, tempTeams: [], teams: [] };

    case "nextPageAction":
      return { ...state, nextPage: action.status };

    case "editRoomidAction":
      return { ...state, tempRoomid: action.roomid };

    case "editTeamNameAction":
      return { ...state, tempTeamName: action.teamName };

    case "roomJoined":
      return {
        ...state,
        roomid: state.tempRoomid,
        tempRoomid: null,
      };

    case "approvedAction":
      return {
        ...state,
        teamName: state.tempTeamName,
        tempTeamName: null,
      };

    case "disapprovedAction":
      return {
        ...state,
        tempTeamName: null,
      };

    case "endQuiz":
      return {
        ...state,
        quizEnded: true,
        points: action.roundPoints,
      };

    case "clearRoom":
      return {
        ...state,
        ...initialRoomState,
      };

    default:
      return state;
  }
}
