const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const questions = require("../models/questions.js");
const Question = mongoose.model("Questions");

// middleware that is specific to this router
router.use(function (req, res, next) {
  console.log("Entered /categories");
  next();
});

// routers
router.get("/", function (req, res) {
  Question.distinct("category")
    .then((categories) => {
      res.send(categories);
    })
    .catch((err) => {
      res.sendStatus(500);
      throw err;
    });
});

router.get("/:category/questions/", function (req, res) {
  const reqCategory = req.params.category;

  Question.find({ category: reqCategory }, { question: 1, answer: 1 })
    .then((questions) => {
      if (reqCategory === undefined) {
        throw "params";
      } else {
        return questions;
      }
    })
    .then((questions) => {
      res.send(questions);
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

router.get("/:category/questions/random", function (req, res) {
  const reqCategory = req.params.category;

  Question.find({ category: reqCategory }, { question: 1, answer: 1 })
    .then((questions) => {
      if (reqCategory === undefined) {
        throw "params";
      } else {
        return questions;
      }
    })
    .then((questions) => {
      const randomIndex = Math.floor(
        Math.random() * Math.floor(questions.length)
      );
      let message = questions[randomIndex];
      message = JSON.stringify(message);
      message = JSON.parse(message);

      res.json(message);
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

router.get("/:category/questions/:questionid", function (req, res) {
  const reqCategory = req.params.category;
  const reqQuestionid = req.params.questionid;

  Question.findOne(
    { category: reqCategory, _id: reqQuestionid },
    { question: 1, answer: 1 }
  )
    .then((question) => {
      if (reqCategory === undefined || reqQuestionid === undefined) {
        throw "params";
      } else {
        return question;
      }
    })
    .then((question) => {
      res.send(question);
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
