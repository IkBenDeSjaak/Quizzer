const port = 3000;
const serverHostname = `${window.location.hostname}:${port}`
const serverFetchBase = `${window.location.protocol}//${serverHostname}`

let theSocket;

export function addMessage(msg) {
  if (typeof msg !== "string") {
    msg = JSON.stringify(msg);
  }
  console.log(msg);
}

export function login(roomid) {
  console.log("onLogin");
  startLogin(roomid, "scoreboard")
    .then((msg) => addMessage(msg))
    .then(() => {
      console.log("onOpenSocket");
      let ws = openWebSocket();
      ws.onerror = () => addMessage("WebSocket error");
      ws.onopen = () => addMessage("WebSocket connection established");
      ws.onclose = () => addMessage("WebSocket connection closed");
      ws.onmessage = (msg) => addMessage(msg.data);
    })
    .catch((err) => addMessage("ERROR: " + err.message));
}

export function onSend() {
  const msg = {messageType: "SCOREBOARD_JOIN"}
  const ws = getWebSocket();
  ws.send(JSON.stringify(msg));
}

export function openWebSocket() {
  if(theSocket) {
    theSocket.onerror = null;
    theSocket.onopen  = null;
    theSocket.onclose = null;
    theSocket.close();
  }
  console.log("Opening socket for", `ws://${serverHostname}`);
  theSocket = new WebSocket(`ws://${serverHostname}`);
  return theSocket;
}

export function getWebSocket() {
  if( theSocket ) {
    return theSocket;
  }
  else {
    throw new Error("The websocket has not been opened yet.")
  }
}

function checkFetchError( response ) {
  return response.ok
            ? response.json()
            : Promise.reject(new Error('Unexpected response'));
}

export function startLogin(roomid,clientType) {
  console.log("roomid: ", roomid)
  const body = { roomid, clientType };
  const fetchOptions = { method: 'POST',
                         body: JSON.stringify(body),
                         headers: {
                           'Accept': 'application/json',
                           'Content-Type': 'application/json'
                         },
                         credentials: 'include',
                         mode: 'cors'
                       }
  return fetch(serverFetchBase+'/login', fetchOptions)
    .then(response => checkFetchError(response));
}

export function startLogout() {
  return  fetch(serverFetchBase+'/logout', { method: 'DELETE', credentials: 'include', mode: 'cors' })
             .then((response) => checkFetchError(response));
}
