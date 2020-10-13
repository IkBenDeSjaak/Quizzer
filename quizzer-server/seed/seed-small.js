const mongoose = require("mongoose");
require("../models/questions");

const dbName = "quizzer";

const db = mongoose.connection;
const Questions = mongoose.model("Questions");

mongoose
  .connect(`mongodb://localhost:27017/${dbName}`, { useNewUrlParser: true })
  .then(() => {
    return seedQuestions();
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    db.close();
  });

async function seedQuestions() {
  await Questions.deleteMany();

  await Questions.insertMany([
    {
      _id: 1,
      question: "What is a dog",
      answer: "Super cute",
      category: "animals",
    },
    {
      _id: 2,
      question: "What is a cat",
      answer: "Super mega cute",
      category: "animals",
    },
    {
      _id: 3,
      question: "What is a koala",
      answer: "Super mega uber cute",
      category: "animals",
    },
  ]);
}