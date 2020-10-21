import { nextPageAction } from "../reducers/roundReducer";

const api = "http://localhost:3000";

export function clearPoints() {
  return { type: "clearPoints" };
}

export function clearPointsAction() {
  return async (dispatch) => {
    dispatch(nextPageAction(true));
    dispatch(clearPoints());
  };
}

export function fetchCorrectQuestions(teamid) {
  return async (dispatch, getState) => {
    let state = getState();
    return await fetch(
      api + "/rooms/" + state.room.roomid + "/teams/" + teamid + "/score",
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((points) => {
        dispatch(correctQuestionsReceived(points, teamid));
      })
      .catch((err) => console.error("Error: ", err));
  };
}

export function correctQuestionsReceived(points, teamid) {
  return { type: "correctQuestionsReceived", points, teamid };
}

export function addedRoundPoints() {
  return { type: "addedRoundPoints" };
}

export function addRoundPoints(roundPoints, teamid) {
  return async (dispatch, getState) => {
    let state = getState();
    const data = {
      roundPoints: roundPoints,
    };
    return await fetch(
      api + "/rooms/" + state.room.roomid + "/teams/" + teamid + "/score/",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then(() => {
        dispatch(addedRoundPoints());
      })
      .catch((err) => console.error("Error: ", err));
  };
}

// reducer
const initialRoundPointState = {
  teams: [],
};

export function roundPointsReducer(state = initialRoundPointState, action) {
  switch (action.type) {
    case "clearPoints":
      return { ...state, teams: [] };

    case "correctQuestionsReceived":
      return {
        ...state,
        teams: [
          ...state.teams,
          {
            teamid: action.teamid,
            correct: action.points.rounds[action.points.rounds.length - 1],
          },
        ],
      };

    case "addedRoundPoints":
      return { ...state };

    default:
      return state;
  }
}
