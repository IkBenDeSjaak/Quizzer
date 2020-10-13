const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const rooms = require("../models/rooms.js");
const Rooms = mongoose.model("Rooms");
const dbName = "quizzer";

// middleware that is specific to this router
router.use(function (req, res, next) {
  console.log("Entered /rooms");
  next();
});

// routers
router.get("/", function (req, res) {
  res.send("Hello rooms");
});

router.get("/:roomid/teams/:teamid/score", function (req, res) {
  const reqRoomid = req.params.roomid;
  const reqTeamid = req.params.teamid;

  Rooms.find({ _id: reqRoomid }).then((score) => {
    // for each room
    score.forEach((element) => {
      // for each team in each room
      for (let i = 0; i < element.teams.length; i++) {
        // check if name is team name
        if (element.teams[i].name === reqTeamid) {
            // check how many questions correct
            // per round the team has

            let scoresPerRound = {}

            // for each answer that is correct
            // add a point to object
            element.teams[i].answers.forEach(answer => {
                if(answer.isCorrect) {
                    // if the round doesn't exist, explicitly
                    // make it 1 else just add one
                    if(!scoresPerRound["round "+answer.round]) {
                        scoresPerRound["round "+answer.round] = 1
                    } else {
                        scoresPerRound["round "+answer.round]++
                    }
                }
            });

          res.json({
            roundPoints: element.teams[i].roundPoints,
            rounds: scoresPerRound
          });
        }
      }
    });
  });
});

module.exports = router;
