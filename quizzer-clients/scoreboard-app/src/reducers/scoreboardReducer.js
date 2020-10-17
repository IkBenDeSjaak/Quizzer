import { login } from "../ws";

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

// reducer
const initialScoreboardState = {
  roomid: null,
  connected: null,
  stopLoading: null,
};

export function scoreboardReducer(state = initialScoreboardState, action) {
  switch (action.type) {
    case "roomJoined":
      return { ...state };

    case "editRoomidAction":
      return { ...state, roomid: action.roomid };

    case "onConnectAction":
      const onConnectChanges = {
        connected: true,
      };
      return { ...state, ...onConnectChanges };

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

    default:
      return state;
  }
}
