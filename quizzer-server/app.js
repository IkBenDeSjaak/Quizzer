const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const WebSocket = require("ws");

const categories = require("./routes/categories");
const rooms = require("./routes/rooms");
const { json } = require("body-parser");

const app = express();
const port = 3000;
const dbName = "quizzer";

app.use(cors({ origin: true, credentials: true }));
app.options("*", cors({ origin: true, credentials: true }));

const sessionParser = session({
  saveUninitialized: false,
  secret: "$eCuRiTy",
  resave: false,
});
app.use(sessionParser);

app.use(bodyParser.json());

app.use("/categories", categories);
app.use("/rooms", rooms);

app.get("/", (req, res) => {
  res.send("Welcome to quizzer-server");
});

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

    console.log("Session is parsed");

    websocketServer.handleUpgrade(req, networkSocket, head, (newWebSocket) => {
      websocketServer.emit("connection", newWebSocket, req);
    });
  });
});

websocketServer.on("connection", (socket, req) => {
  socket.roomid = req.session.roomid

  socket.on("message", (message) => {
    req.session.reload((err) => {
      if (err) {
        throw err;
      }

      message = JSON.parse(message);
      console.log("New message: ", message);

      switch (message.messageType) {
        case "NEW_QUESTION":
          const outMessage = {
            messageType: "NEW_QUESTION",
            roomid: message.roomid,
          };

          console.log(outMessage)

          websocketServer.clients.forEach(function (client) {
            if(client.roomid === message.roomid) {
              client.send(JSON.stringify(outMessage));
            }
          })
          break;

        default:
          break;
      }

      req.session.save();
    });
  });
});

// Start the server.
httpServer.listen(port, () => {
  console.log(
    `quizzer-server & websockets listening at http://localhost:${port}`
  );
  mongoose.connect(
    `mongodb://localhost:27017/${dbName}`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log(`quizzer db started on port ${port}`);
    }
  );
});
