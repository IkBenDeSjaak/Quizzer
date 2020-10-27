const api = "http://localhost:3000";

// action creators
export function receivedPoints(points, teamid) {
  return { type: "receivedPoints", points, teamid };
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
        dispatch(receivedPoints(points, teamid));
      })
      .catch((err) => console.error("Error: ", err));
  };
}

export function clearPoints() {
  return { type: "clearPoints" };
}

export function fetchTeam(teamName) {
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
        response.forEach((team) => {
          if (team.name === teamName) {
            dispatch(addTeam(teamName))
          }
        })
      })
      .catch((err) => console.error("Error: ", err));
  };
}

export function addTeam(teamid) {
  return { type: "addTeam", teamid };
}

//reducer
const initialPointsState = {
  teams: [],
};

export function pointsReducer(state = initialPointsState, action) {
  switch (action.type) {
    case "receivedPoints":
      let receivedPointsChanges;

      state.teams.map((team, i) => {
        if (team.teamid === action.teamid) {
         receivedPointsChanges = [
            ...state.teams.slice(0, i),
            {
              ...state.teams[i],
              roundPoints: action.points.roundPoints,
              rounds: action.points.rounds,
            },
            ...state.teams.slice(i + 1),
          ];
        }
        return receivedPointsChanges;
      });

      return { ...state, teams: receivedPointsChanges };

    case "clearPoints":
      return { ...state, ...initialPointsState };

    case "addTeam":
      if (state.teams.length >= 1) {
        return {
          ...state,
          teams: [...state.teams, { teamid: action.teamid }],
        };
      } else {
        return {
          ...state,
          teams: [{ teamid: action.teamid }],
        };
      }

    default:
      return state;
  }
}
