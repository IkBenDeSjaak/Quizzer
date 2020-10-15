import { login } from "../ws";

// action creators
export function roomJoined() {
  return { type: "roomJoined" };
}

export function joinRoom() {
  return async (dispatch) => {
    const loginPromise = new Promise(function(resolve, reject) {
      resolve(login());
   });
    return loginPromise
    .then(() => {
      dispatch(roomJoined())
    });
  };
}

// reducer
const initialScoreboardState = {
  hasJoined: null
};

export function scoreboardReducer(state = initialScoreboardState, action) {
  switch (action.type) {
    case "roomJoined":
      const something = true
      return { ...state, hasJoined: something };

    default:
      return state;
  }
}
