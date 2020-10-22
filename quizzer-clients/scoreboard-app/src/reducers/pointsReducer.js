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

//reducer
const initialPointsState = {
  teams: [],
};

export function pointsReducer(state = initialPointsState, action) {
  switch (action.type) {
    case "receivedPoints": {
      const receivedPointsChanges = {
        teams: [
          ...state.teams,
          {
            teamid: action.teamid,
            roundPoints: action.points.roundPoints,
            rounds: action.points.rounds,
          },
        ],
      };
      return { ...state, ...receivedPointsChanges };
    }

    case "clearPoints":
      return { ...state, ...initialPointsState };

    default:
      return state;
  }
}
