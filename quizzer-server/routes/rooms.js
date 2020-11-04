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
router.get("/", function (req, res) {
  res.sendStatus(200);
});

router.post("/", function (req, res) {
  // Copyright patrick enzo
  let roomcode = "";
  let possible = "0123456789";

  for (let i = 0; i <= 6; i++) {
    roomcode += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  Rooms.create({
    _id: roomcode,
  })
    .then(() => {
      res.json({ roomid: roomcode });
    })
    .catch((err) => {
      res.sendStatus(500);
      throw err;
    });
});

router.post("/:roomid/rounds", function (req, res) {
  const reqRoomid = req.params.roomid;
  const reqCategories = req.body.categories;

  Rooms.findById(reqRoomid)
    .then((room) => {
      if (reqRoomid === undefined || reqCategories === undefined) {
        throw "params";
      } else {
        return room;
      }
    })
    .then((room) => {
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
    })
    .catch((err) => {
      if (err == "params") {
        res.status(404).send("404: Missing parameters");
      } else {
        res.sendStatus(500);
      }
      throw err;
    });
});

router.get("/:roomid", function (req, res) {
  const reqRoomid = req.params.roomid;
  let questions = 0;
  let lastQuestionid = 0;
  let rounds = 0;
  let teams = 0;

  Rooms.findById(reqRoomid)
    .then((room) => {
      if (reqRoomid === undefined) {
        throw "params";
      } else {
        return room;
      }
    })
    .then((room) => {
      rounds = room.rounds.length;
      // question is the amount of questions in the last round
      questions = room.rounds[rounds - 1].questions.length;

      lastQuestionid =
        room.rounds[rounds - 1].questions[parseInt(questions) - 1]._id;
      // amount of teams
      teams = room.teams.length;

      return [questions, lastQuestionid, rounds, teams];
    })
    .then((data) => {
      res.send({
        question: data[0],
        lastQuestionid: data[1],
        round: data[2],
        teams: data[3],
      });
    })
    .catch((err) => {
      if (err == "params") {
        res.status(404).send("404: Missing parameters");
      } else {
        res.sendStatus(500);
      }
      throw err;
    });
});

router.post("/:roomid/rounds/question", function (req, res) {
  const reqRoomid = req.params.roomid;
  const reqQuestionid = req.body.questionid;

  Rooms.findById({ _id: reqRoomid })
    .then((room) => {
      if (reqRoomid === undefined || reqQuestionid === undefined) {
        throw "params";
      } else {
        return room;
      }
    })
    .then((room) => {
      room.rounds[room.rounds.length - 1].questions.push({
        _id: reqQuestionid,
      });
      // need to save room, not round because round
      // is a subdocument of room
      room.save();
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      if (err == "params") {
        res.status(404).send("404: Missing parameters");
      } else {
        res.sendStatus(500);
      }
      throw err;
    });
});

router.get("/:roomid/teams/:teamid/score", function (req, res) {
  const reqRoomid = req.params.roomid;
  const reqTeamid = req.params.teamid;

  Rooms.find({ _id: reqRoomid })
    .then((score) => {
      if (reqRoomid === undefined || reqTeamid === undefined) {
        throw "params";
      } else {
        return score;
      }
    })
    .then((score) => {
      // for each room
      score.forEach((element) => {
        // for each team in each room
        for (let i = 0; i < element.teams.length; i++) {
          // check if name is team name
          if (element.teams[i].name === reqTeamid) {
            // check how many questions correct
            // per round the team has

            let scoresPerRound = {};
            let rounds = 0;
            let pointsPerRound = 0;

            // for each answer that is correct
            // add a point to object
            element.teams[i].answers.forEach((answer) => {
              if (answer.isCorrect) {
                // if the round doesn't exist, explicitly
                // make it 1 else just add one
                if (!scoresPerRound[answer.round]) {
                  scoresPerRound[answer.round] = 1;
                  rounds++;
                } else {
                  scoresPerRound[answer.round]++;
                }
                pointsPerRound = Object.values(scoresPerRound);
              }
            });

            res.json({
              roundPoints: element.teams[i].roundPoints,
              rounds: pointsPerRound,
              roundAmount: rounds,
            });
          }
        }
      });
    })
    .catch((err) => {
      if (err == "params") {
        res.status(404).send("404: Missing parameters");
      } else {
        res.sendStatus(500);
      }
      throw err;
    });
});

router.post("/:roomid/teams", function (req, res) {
  const reqRoomid = req.params.roomid;
  const reqTeamName = req.body.teamName;

  Rooms.findById(reqRoomid)
    .then((room) => {
      if (reqRoomid === undefined || reqTeamName === undefined) {
        throw "params";
      } else {
        return room;
      }
    })
    .then((room) => {
      room.teams.push({
        name: reqTeamName,
      });
      room.save();
    })
    .then(res.sendStatus(200))
    .catch((err) => {
      if (err == "params") {
        res.status(404).send("404: Missing parameters");
      } else {
        res.sendStatus(500);
      }
      throw err;
    });
});

router.put("/:roomid/teams/:teamid", function (req, res) {
  const reqRoomid = req.params.roomid;
  const reqTeamid = req.params.teamid;

  Rooms.findById(reqRoomid)
    .then((room) => {
      if (reqRoomid === undefined || reqTeamid === undefined) {
        throw "params";
      } else {
        return room;
      }
    })
    .then((room) => {
      let team = room.teams.find((team) => team.name === reqTeamid);
      team.isApproved = true;

      room.save();
    })
    .then(res.sendStatus(200))
    .catch((err) => {
      if (err == "params") {
        res.status(404).send("404: Missing parameters");
      } else {
        res.sendStatus(500);
      }
      throw err;
    });
});

router.delete("/:roomid/teams/:teamid", function (req, res) {
  const reqRoomid = req.params.roomid;
  const reqTeamid = req.params.teamid;

  Rooms.findById(reqRoomid)
    .then((room) => {
      if (reqRoomid === undefined || reqTeamid === undefined) {
        throw "params";
      } else {
        return room;
      }
    })
    .then((room) => {
      const teams = room.teams;
      const index = teams.findIndex((team) => team.name === reqTeamid);

      teams.splice(index, 1);

      room.save();
    })
    .then(res.sendStatus(200))
    .catch((err) => {
      if (err == "params") {
        res.status(404).send("404: Missing parameters");
      } else {
        res.sendStatus(500);
      }
      throw err;
    });
});

router.get("/:roomid/teams", function (req, res) {
  const reqRoomid = req.params.roomid;

  Rooms.findById(reqRoomid)
    .then((room) => {
      if (reqRoomid === undefined) {
        throw "params";
      } else {
        return room;
      }
    })
    .then((room) => {
      if (room.teams !== null && room.teams !== undefined) {
        const teams = [];
      } else {
        const teams = room.teams;
      }

      const message = [];

      room.teams.forEach((team) => {
        message.push({
          name: team.name,
          isApproved: team.isApproved,
          roundPoints: team.roundPoints,
          answers: team.answers,
        });
      });

      res.send(message);
    })
    .catch((err) => {
      if (err == "params") {
        res.status(404).send("404: Missing parameters");
      } else {
        res.sendStatus(500);
      }
      throw err;
    });
});

router.get("/:roomid/teams/:teamid/answers/:questionid", function (req, res) {
  const reqRoomid = req.params.roomid;
  const reqTeamid = req.params.teamid;
  const reqQuestionid = req.params.questionid;

  let teamAnswer;

  Rooms.findById(reqRoomid)
    .then((room) => {
      if (
        reqRoomid === undefined ||
        reqTeamid === undefined ||
        reqQuestionid === undefined
      ) {
        throw "params";
      } else {
        return room;
      }
    })
    .then((room) => {
      room.teams.forEach((team) => {
        if (team.name === reqTeamid) {
          team.answers.forEach((answer) => {
            if (answer._id === parseInt(reqQuestionid)) {
              teamAnswer = answer.answer;
              isCorrect = answer.isCorrect;
              res.send({ answer: teamAnswer, isCorrect: isCorrect });
            }
          });
        }
      });
    })
    .catch((err) => {
      if (err == "params") {
        res.status(404).send("404: Missing parameters");
      } else {
        res.sendStatus(500);
      }
      throw err;
    });
});

router.put("/:roomid/teams/:teamid/answers/:questionid/approve", function (
  req,
  res
) {
  const reqRoomid = req.params.roomid;
  const reqTeamid = req.params.teamid;
  const reqQuestionid = req.params.questionid;
  const reqIsCorrect = req.body.isCorrect;

  Rooms.findById(reqRoomid)
    .then((room) => {
      if (
        reqRoomid === undefined ||
        reqTeamid === undefined ||
        reqQuestionid === undefined ||
        reqIsCorrect === undefined
      ) {
        throw "params";
      } else {
        return room;
      }
    })
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
      res.sendStatus(200);
    })
    .catch((err) => {
      if (err == "params") {
        res.status(404).send("404: Missing parameters");
      } else {
        res.sendStatus(500);
      }
      throw err;
    });
});

router.put("/:roomid/teams/:teamid/answers", function (req, res) {
  const reqRoomid = req.params.roomid;
  const reqTeamid = req.params.teamid;
  const reqAnswer = req.body.answer;

  Rooms.findById(reqRoomid)
    .then((room) => {
      if (
        reqRoomid === undefined ||
        reqTeamid === undefined ||
        reqAnswer === undefined
      ) {
        throw "params";
      } else {
        return room;
      }
    })
    .then((room) => {
      let roundAmount = room.rounds.length - 1;
      let questionAmount = room.rounds[roundAmount].questions.length - 1;
      const questionid = room.rounds[roundAmount].questions[questionAmount];

      room.teams.forEach((team) => {
        if (team.name === reqTeamid) {
          // only push if it doesn't exist
          let answerAmount = team.answers.length - 1;

          // if the questionid is the same as the last questionid
          if (team.answers.length > 0) {
            if (questionid._id === team.answers[answerAmount]._id) {
              let changes = [
                ...team.answers.slice(0, answerAmount),
                {
                  _id: questionid.id,
                  answer: reqAnswer,
                  round: room.rounds.length,
                },
              ];
              team.answers = changes;
            } else {
              team.answers.push({
                _id: questionid.id,
                answer: reqAnswer,
                round: room.rounds.length,
              });
            }
          } else {
            team.answers.push({
              _id: questionid.id,
              answer: reqAnswer,
              round: room.rounds.length,
            });
          }
        }
      });
      room.save();
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      if (err == "params") {
        res.status(404).send("404: Missing parameters");
      } else {
        res.sendStatus(500);
      }
      throw err;
    });
});

router.post("/:roomid/teams/:teamid/score", function (req, res) {
  const reqRoomid = req.params.roomid;
  const reqTeamid = req.params.teamid;
  const reqRoundpoints = req.body.roundPoints;

  Rooms.findById(reqRoomid)
    .then((room) => {
      if (
        reqRoomid === undefined ||
        reqTeamid === undefined ||
        reqRoundpoints === undefined
      ) {
        throw "params";
      } else {
        return room;
      }
    })
    .then((room) => {
      room.teams.forEach((team) => {
        if (team.name === reqTeamid) {
          if (team.roundPoints !== undefined) {
            team.roundPoints += reqRoundpoints;
          } else {
            team.roundPoints = reqRoundpoints;
          }
        }
      });
      room.save();
    })
    .catch((err) => {
      if (err == "params") {
        res.status(404).send("404: Missing parameters");
      } else {
        res.sendStatus(500);
      }
      throw err;
    });
});

module.exports = router;
