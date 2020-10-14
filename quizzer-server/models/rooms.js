const mongoose = require("mongoose");

const Questions = mongoose.model("Questions");

const roomsSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  teams: [{
      name: {
          type: String,
          isRequired: true,
      },
      roundPoints: {
          type: Number,
          isRequired: false,
      },
      isApproved: {
          type: Boolean,
          default: false,
          isRequired: true,
      },
      answers: [{
          _id: {
              type: Number,
              of: Questions,
              isRequired: true,
          },
          answer: {
              type: String,
              isRequired: true,
          },
          isCorrect: {
              type: Boolean,
              isRequired: false,
          },
          round: {
              type: Number,
              isRequired: true
          }
      }]
  }],
  rounds: [{
      _id: {
          type: Number,
          isRequired: true,
      },
      categories: {
          type: [String],
          isRequired: true,
      },
      questions: [{
          _id: {
              type: Number,
              of: Questions,
              isRequired: true
          }
      }]
  }]
});

module.exports = mongoose.model("Rooms", roomsSchema);
module.exports = roomsSchema;
