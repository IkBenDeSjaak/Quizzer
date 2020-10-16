import { theStore as store } from "./index";
import {
  onConnectAction,
  onNewQuestionAction,
} from "./reducers/scoreboardReducer";

const port = 3000;
const serverHostname = `${window.location.hostname}:${port}`;
const serverFetchBase = `${window.location.protocol}//${serverHostname}`;

let theSocket;

export function addMessage(msg) {
  if (typeof msg !== "string") {
    msg = JSON.stringify(msg);
  }
  console.log(msg);
}

export function onMessage(msg) {
  msg = JSON.parse(msg);

  switch (msg.messageType) {
    case "NEW_QUESTION":
      let state = store.getState()

      if (msg.roomid === state.scoreboard.roomid) {
        store.dispatch(onNewQuestionAction());
      }
      break;

    default:
      if (typeof msg !== "string") {
        msg = JSON.stringify(msg);
      }
      console.log(msg);
      break;
  }
}

export function login(roomid) {
  console.log("onLogin");
  startLogin(roomid, "scoreboard")
    .then((msg) => addMessage(msg))
    .then(() => {
      console.log("onOpenSocket");
      let ws = openWebSocket();
      ws.onerror = () => addMessage("WebSocket error");
      ws.onopen = () => store.dispatch(onConnectAction());
      ws.onclose = () => addMessage("WebSocket connection closed");
      ws.onmessage = (msg) => onMessage(msg.data);
    })
    .catch((err) => addMessage("ERROR: " + err.message));
}

export function sendMessage(message, roomid) {
  const msg = { messageType: message, roomid: roomid };
  const ws = getWebSocket();
  // clone msg because it's circulair
  ws.send(JSON.stringify(msg));
}

export function openWebSocket() {
  if (theSocket) {
    theSocket.onerror = null;
    theSocket.onopen = null;
    theSocket.onclose = null;
    theSocket.close();
  }
  console.log("Opening socket for", `ws://${serverHostname}`);
  theSocket = new WebSocket(`ws://${serverHostname}`);
  return theSocket;
}

export function getWebSocket() {
  if (theSocket) {
    return theSocket;
  } else {
    throw new Error("The websocket has not been opened yet.");
  }
}

function checkFetchError(response) {
  return response.ok
    ? response.json()
    : Promise.reject(new Error("Unexpected response"));
}

export function startLogin(roomid, clientType) {
  console.log("roomid: ", roomid);
  const body = { roomid, clientType };
  const fetchOptions = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    mode: "cors",
  };
  return fetch(serverFetchBase + "/login", fetchOptions).then((response) =>
    checkFetchError(response)
  );
}

export function startLogout() {
  return fetch(serverFetchBase + "/logout", {
    method: "DELETE",
    credentials: "include",
    mode: "cors",
  }).then((response) => checkFetchError(response));
}
