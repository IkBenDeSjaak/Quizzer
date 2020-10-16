const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const WebSocket = require("ws");

const categories = require("./routes/categories");
const rooms = require("./routes/rooms");

const app = express();
const port = 3000;
const dbName = "quizzer";

app.use(cors({ origin: true, credentials: true }));
app.options("*", cors({ origin: true, credentials: true }));

app.use(bodyParser.json());

app.use("/categories", categories);
app.use("/rooms", rooms);

app.get("/", (req, res) => {
  res.send("Welcome to quizzer-server");
});

// We need the same instance of the session parser in express and
// WebSocket server, to give socket-handlers access to the session.
const sessionParser = session({
  saveUninitialized: false,
  secret: "$eCuRiTy",
  resave: false,
});
app.use(sessionParser);

// Here we set up the session
app.post("/login", (req, res) => {
  console.log(
    `Updating session for ${req.body.clientType} in room ${req.body.roomid}`
  );

  req.session.roomid = req.body.roomid;
  req.session.clientType = req.body.clientType;

  res.send({ result: "OK", message: "Session updated" });
});

const httpServer = http.createServer(app);
const websocketServer = new WebSocket.Server({ noServer: true });

httpServer.on("upgrade", (req, networkSocket, head) => {
  sessionParser(req, {}, () => {
    if (req.session.roomid === undefined) {
      networkSocket.destroy();
      return;
    }

    console.log("Session is parsed and we have a User!");

    websocketServer.handleUpgrade(req, networkSocket, head, (newWebSocket) => {
      websocketServer.emit("New user!", newWebSocket, req);
    });
  });
});

websocketServer.on("connection", (socket, req) => {
  socket.on("message", (message) => {
    req.session.reload((err) => {
      if (err) {
        throw err;
      }

      if (req.session.roomid == undefined) {
        console.log(`Ignoring message from logged out user: "${message}"`);
        return;
      }

      message = JSON.parse(message);

      switch (message.messageType) {
        case "SCOREBOARD_JOIN":
          console.log("Scoreboard joined");

          break;

        default:
          websocketServer.clients.forEach(function (client) {
            client.send("Hello there");
          });
          break;
      }

      req.session.save();
    });
  });
});

// Start the server.
httpServer.listen(port, () => {
  console.log(`quizzer-server & websockets listening at http://localhost:${port}`);
  mongoose.connect(
    `mongodb://localhost:27017/${dbName}`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log(`quizzer db started on port ${port}`);
    }
  );
});
