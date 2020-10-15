const mongoose = require("mongoose");
const express = require("express");
const session = require('express-session');
const cors = require('cors');
const bodyParser = require("body-parser");
const http = require('http');
const WebSocket = require("ws");

const categories = require('./routes/categories')
const rooms = require('./routes/rooms')

const app = express();
const port = 3000;
const dbName = 'quizzer';

app.use(cors({ origin: true, credentials: true }));
app.options("*", cors({ origin: true, credentials: true }));

app.use(bodyParser.json());

const sessionParser = session({
  saveUninitialized: false,
  secret: '$eCuRiTy',
  resave: false
});
app.use(sessionParser);

app.use('/categories', categories)
app.use('/rooms', rooms)

app.get("/", (req, res) => {
  res.send("Welcome to quizzer-server");
});

// Create HTTP server by ourselves, in order to attach websocket server.
const httpServer = http.createServer(app);

// Create the Web socket server.  
const websocketServer = new WebSocket.Server({ noServer: true });

httpServer.on('upgrade', (req, networkSocket, head) => {
  sessionParser(req, {}, () => {
    // The 'req' parameter contains the HTTP request that is for the upgrade
    // request to the websocket protocol.
    // We can refuse the upgrade request by returning from this function 
    // (and closing the networkconnection for this request)
    if (req.session.userName === undefined) {
      networkSocket.destroy();
      return;
    }

    console.log('Session is parsed and we have a User!');

    // Everything is fine. We tell the websocket server to 
    // initiate a new websocket connection for this request 
    // and emit a new connection event passing in the 
    // newly created websocket when the setup is complete
    websocketServer.handleUpgrade(req, networkSocket, head, newWebSocket => {
      websocketServer.emit('connection', newWebSocket, req);
    });
  });
});

websocketServer.on('connection', (socket, req) => {
  socket.on('message', (message) => {
    req.session.reload((err) => {   // if we don't call reload(), we'll get a old copy
      // of the session, and won't see changes made by
      // Express routes (like '/logout', above)
      if (err) { throw err };

      if (req.session.userName == undefined) {
        // The session does not contain the name of a user, so this this client
        // has probably logged out.
        // We'll simply ignore any messages from this client.
        console.log(`Ignoring message from logged out user: "${message}"`);
        return;
      }

      req.session.messageCounter++;
      console.log(`${req.session.messageCounter}th WS message from ${req.session.userName}: "${message}"`);

      // broadcast this message to all connected browsers
      const outMessage = `[${req.session.userName} / ${req.session.messageCounter}]: ${message}`
      websocketServer.clients.forEach(function (client) {
        client.send(outMessage);
      })
      req.session.save()  // If we don't call save(), Express routes like '/logout' (above)
      // will not see the changes we make to the session in this socket code.
    })
  });
});

app.listen(port, () => {
  console.log(`quizzer-server listening at http://localhost:${port}`);
  mongoose.connect(`mongodb://localhost:27017/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(`quizzer db started on port ${port}`);
  });
});