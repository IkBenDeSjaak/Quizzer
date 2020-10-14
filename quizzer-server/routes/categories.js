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
  Question.distinct("category").then((categories) => {
    res.send(categories);
  });
});

router.get("/:category/questions/", function (req, res) {
  const reqCategory = req.params.category;

  Question.find({ category: reqCategory }, { question: 1, answer: 1 }).then(
    (questions) => {
      res.send(questions);
    }
  );
});

router.get("/:category/questions/:questionid", function (req, res) {
  const reqCategory = req.params.category;
  const reqQuestionid = req.params.questionid;

  Question.findOne(
    { category: reqCategory, _id: reqQuestionid },
    { question: 1, answer: 1 }
  ).then((question) => {
    res.send(question);
  });
});

module.exports = router;
