const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const rooms = require("../models/rooms.js");
const { Router } = require("express");
const Rooms = mongoose.model("Rooms");

// middleware that is specific to this router
router.use(function (req, res, next) {
  console.log("Entered /rooms");
  next();
});

// routers
// TODO: add status codes
// TODO: error handling
router.get("/", function (req, res) {
  res.send("Hello rooms");
});

router.post("/", function (req, res) {
  // Get the amount of rooms and add one for the id
  // TODO: make a random 6-long number not repeated
  Rooms.countDocuments()
    .then((amount) => {
      return (roomsNumber = amount + 1);
    })
    .then((roomsNumber) => {
      Rooms.create({
        _id: roomsNumber,
      }).then(() => {
        res.json({ roomid: roomsNumber });
      });
    });
});

router.post("/:roomid/rounds", function (req, res) {
  const reqRoomid = req.params.roomid;
  const reqCategories = req.body.categories;

  Rooms.findById(reqRoomid).then((room) => {
    let roundsNumber = 0;
    room.rounds.forEach((element) => {
      roundsNumber++;
    });

    room.rounds.push({
      _id: roundsNumber + 1,
      categories: reqCategories,
    });
    room.save();

    res.sendStatus(200);
  });
});

router.get("/:roomid", function (req, res) {
  const reqRoomid = req.params.roomid;
  let questions = 0;
  let rounds = 0;
  let teams = 0;

  Rooms.findById(reqRoomid)
    .then((room) => {
      rounds = room.rounds.length;
      // question is the amount of questions in the last room
      questions = room.rounds[rounds - 1].questions.length;

      // amount of teams
      teams = room.teams.length;

      return [questions, rounds, teams];
    })
    .then((data) => {
      res.send({
        question: data[0],
        round: data[1],
        teams: data[2],
      });
    });
});

// TODO: put limits in for question amount
router.post("/:roomid/rounds/:roundNumber/", function (req, res) {
  const reqRoomid = req.params.roomid;
  const reqRoundNumber = req.params.roundNumber;
  const reqQuestionid = req.body.questionid;

  Rooms.findById({ _id: reqRoomid })
    .then((room) => {
      room.rounds.forEach((round) => {
        if (round._id === parseInt(reqRoundNumber)) {
          round.questions.push({
            _id: reqQuestionid,
          });
        }
      });
      // need to save room, not round because round
      // is a subdocument of room
      room.save();
    })
    .then(() => {
      res.sendStatus(200);
    });
});

router.get("/:roomid/teams/:teamid/score", function (req, res) {
  const reqRoomid = req.params.roomid;
  const reqTeamid = req.params.teamid;

  // TODO: rework this with find & other queries
  Rooms.find({ _id: reqRoomid }).then((score) => {
    // for each room
    score.forEach((element) => {
      // for each team in each room
      for (let i = 0; i < element.teams.length; i++) {
        // check if name is team name
        if (element.teams[i].name === reqTeamid) {
          // check how many questions correct
          // per round the team has

          let scoresPerRound = {};

          // for each answer that is correct
          // add a point to object
          element.teams[i].answers.forEach((answer) => {
            if (answer.isCorrect) {
              // if the round doesn't exist, explicitly
              // make it 1 else just add one
              if (!scoresPerRound["round " + answer.round]) {
                scoresPerRound["round " + answer.round] = 1;
              } else {
                scoresPerRound["round " + answer.round]++;
              }
            }
          });

          res.json({
            roundPoints: element.teams[i].roundPoints,
            rounds: scoresPerRound,
          });
        }
      }
    });
  });
});

router.post("/:roomid/teams", function (req, res) {
  const reqRoomid = req.params.roomid;
  const reqTeamName = req.body.teamName;

  Rooms.findById(reqRoomid)
    .then((room) => {
      console.log(room);
      room.teams.push({
        name: reqTeamName,
      });
      room.save();
    })
    .then(res.sendStatus(200));
});

router.put("/:roomid/teams/:teamid", function (req, res) {
  const reqRoomid = req.params.roomid;
  const reqTeamid = req.params.teamid;

  Rooms.findById(reqRoomid)
    .then((room) => {
      let team = room.teams.find((team) => team.name === reqTeamid);
      team.isApproved = true;

      room.save();
    })
    .then(res.sendStatus(200));
});

router.delete("/:roomid/teams/:teamid", function (req, res) {
  const reqRoomid = req.params.roomid;
  const reqTeamid = req.params.teamid;

  Rooms.findById(reqRoomid)
    .then((room) => {
      const teams = room.teams;
      const index = teams.findIndex((team) => team.name === reqTeamid);

      teams.splice(index, 1);

      room.save();
    })
    .then(res.sendStatus(200));
});

router.get("/:roomid/teams", function (req, res) {
  const reqRoomid = req.params.roomid;

  Rooms.findById(reqRoomid).then((room) => {
    const teams = room.teams;
    res.send(teams);
  });
});

router.get("/:roomid/teams/:teamid/answers/:questionid", function (req, res) {
  const reqRoomid = req.params.roomid;
  const reqTeamid = req.params.teamid;
  const reqQuestionid = req.params.questionid;

  let teamAnswer;

  Rooms.findById(reqRoomid).then((room) => {
    room.teams.forEach((team) => {
      if (team.name === reqTeamid) {
        team.answers.forEach((answer) => {
          if (answer._id === parseInt(reqQuestionid)) {
            teamAnswer = answer.answer;
            res.send({ answer: teamAnswer });
          }
        });
      }
    });
  });
});

router.post("/:roomid/teams/:teamid/answers/:questionid", function (req, res) {
  const reqRoomid = req.params.roomid;
  const reqTeamid = req.params.teamid;
  const reqQuestionid = req.params.questionid;
  const reqIsCorrect = req.body.isCorrect;

  Rooms.findById(reqRoomid)
    .then((room) => {
      room.teams.forEach((team) => {
        if (team.name === reqTeamid) {
          team.answers.forEach((answer) => {
            if (answer._id === parseInt(reqQuestionid)) {
              answer.isCorrect = reqIsCorrect;
            }
          });
        }
      });
      room.save();
    })
    .then(() => {
      res.sendStatus(200)
    });
});

module.exports = router;
