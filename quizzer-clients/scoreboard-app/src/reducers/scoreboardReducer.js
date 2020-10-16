import { login } from "../ws";

// action creators
export function roomJoined() {
  return { type: "roomJoined" };
}

// TODO: look at how this gets roomid
// preferably you'd have a editingRoomid 
export function joinRoom(roomid) {
  return async (dispatch) => {
    const loginPromise = new Promise(function(resolve, reject) {
      resolve(login(roomid));
   });
    return loginPromise
    .then(() => {
      dispatch(roomJoined())
    });
  };
}

export function editRoomidAction(roomid) {
  return { type: 'editRoomidAction', roomid }
}

export function onConnectAction() {
  return { type: 'onConnectAction' }
}

// reducer
const initialScoreboardState = {
  hasJoined: null,
  roomid: null,
  connected: null
};

export function scoreboardReducer(state = initialScoreboardState, action) {
  switch (action.type) {
    case "roomJoined":
      const sendRoomChanges = {
        hasJoined: true,
      }
      return { ...state, ...sendRoomChanges };

    case 'editRoomidAction':
      return { ...state, roomid: action.roomid }

    case 'onConnectAction':
      const onConnectChanges = {
        connected: true,
      }
      return { ...state, ...onConnectChanges }

    default:
      return state;
  }
}
