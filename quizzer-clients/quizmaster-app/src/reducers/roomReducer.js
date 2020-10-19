import { login } from "../ws";

const api = "http://localhost:3000";

// action creators
export function newQuizCreated(payload) {
  return { type: "newQuizCreated", payload };
}

export function createNewQuiz() {
  return async (dispatch) => {
    return await fetch(api + "/rooms", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        login(data.roomid);
        return data;
      })
      .then((data) => {
        dispatch(newQuizCreated(data));
      });
  };
}

export function fetchTeamNameAction(teamid) {
  return { type: "fetchTeamNameAction", teamid };
}

export function teamApproved(teamid) {
  return { type: "teamApproved", teamid };
}

export function approveTeam(roomid, teamName) {
  return async (dispatch) => {
    return await fetch(api + "/rooms/" + roomid + "/teams/" + teamName, {
      method: "PUT",
      mode: "cors",
    }).then(() => dispatch(teamApproved(teamName)));
  };
}

export function teamDisapproved(payload) {
  return { type: "teamDisapproved", payload };
}

export function disapproveTeam(roomid, teamName) {
  return async (dispatch) => {
    return await fetch(api + "/rooms/" + roomid + "/teams/" + teamName, {
      method: "DELETE",
      mode: "cors",
    }).then(() => dispatch(teamDisapproved(teamName)));
  };
}

// reducer
const initialRoomState = {
  roomid: null,
  teams: {},
  categories: [],
};

export function roomReducer(state = initialRoomState, action) {
  switch (action.type) {
    case "newQuizCreated":
      return { ...state, roomid: action.payload.roomid };

    case "fetchTeamNameAction":
      if (state.teams.length >= 1) {
        return {
          ...state,
          teams: [...state.teams, { teamid: action.teamid, isApproved: false }],
        };
      } else {
        return {
          ...state,
          teams: [{ teamid: action.teamid, isApproved: false }],
        };
      }

    case "teamApproved":
      let teamApprovedChanges
      state.teams.map((team, i) => {
        if (team.teamid === action.teamid) {
          teamApprovedChanges =  [
              ...state.teams.slice(0, i),
              {
                teamid: action.teamid,
                isApproved: true,
              },
              ...state.teams.slice(i + 1),
            ]
        }
        return "nuggies"
      });
      return { ...state, teams: teamApprovedChanges }

    case "teamDisapproved":
      let newTeams = state.teams.filter((team) => team.teamid !== action.payload);
      return { ...state, teams: newTeams };

    default:
      return state;
  }
}
