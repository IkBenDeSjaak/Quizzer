const mongoose = require("mongoose");
require("../models/questions");
require("../models/rooms");

const dbName = "quizzer";

const db = mongoose.connection;
const Questions = mongoose.model("Questions");
const Rooms = mongoose.model("Rooms");

mongoose
  .connect(`mongodb://localhost:27017/${dbName}`, { useNewUrlParser: true })
  .then(() => {
    return seedQuestions();
  })
  .then(() => {
    return seedRooms();
  })
  .catch((err) => {
    console.error(err);
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

async function seedRooms() {
  await Rooms.deleteMany();

  await Rooms.insertMany([
    {
      _id: 1,
      teams: [
        {
          name: "Alpaca",
          roundPoints: 2,
          isApproved: true,
          answers: [
            {
              _id: 198,
              answer: "New Delhi",
              isCorrect: true,
              round: 1,
            },
            {
              _id: 199,
              answer: "Doge",
              isCorrect: false,
              round: 1,
            },
          ],
        },
        {
          name: "Koala",
          roundPoints: 5,
          isApproved: true,
          answers: [
            {
              _id: 198,
              answer: "New Delphi",
              isCorrect: false,
            },
          ],
        },
      ],
      rounds: [
        {
          _id: 123456,
          categories: ["Art and Literature", "History", "Science and Nature"],
          questions: [
            {
              _id: 198,
            },
          ],
        },
      ],
    },
  ]);
}
