import { theStore as store } from "./index";
import {
  onConnectAction,
  onNewQuestionAction,
  fetchAnswer,
  closeQuestionAction,
  nextQuestionAction,
  endRoundAction,
  endQuizAction,
} from "./reducers/roomReducer";

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
      store.dispatch(onNewQuestionAction());
      store.dispatch(nextQuestionAction());
      break;

    case "NEW_ANSWER":
      let state = store.getState();
      let roomid = state.room.roomid;
      let teamid = msg.payload;
      let questionid = state.room.lastQuestionid;

      store.dispatch(fetchAnswer(roomid, teamid, questionid));
      break;

    case "CLOSE_QUESTION":
      store.dispatch(closeQuestionAction());
      break;

    case "END_ROUND":
      store.dispatch(endRoundAction());
      break;

    case "END_QUIZ":
      store.dispatch(endQuizAction());
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
  // console.log("onLogin");
  startLogin(roomid, "room")
    .then((msg) => addMessage(msg))
    .then(() => {
      // console.log("onOpenSocket");
      let ws = openWebSocket();
      ws.onerror = () => addMessage("WebSocket error");
      ws.onopen = () => store.dispatch(onConnectAction());
      ws.onclose = () => addMessage("WebSocket connection closed");
      ws.onmessage = (msg) => onMessage(msg.data);
    })
    .catch((err) => addMessage("ERROR: " + err.message));
}

export function sendMessage(message, roomid, localPayload) {
  const msg = { messageType: message, roomid: roomid, payload: localPayload };
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
  // console.log("Opening socket for", `ws://${serverHostname}`);
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
  // console.log("roomid: ", roomid);
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
