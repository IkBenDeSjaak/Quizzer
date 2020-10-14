const mongoose = require("mongoose");

const questionsSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Questions", questionsSchema);
module.exports = questionsSchema;
