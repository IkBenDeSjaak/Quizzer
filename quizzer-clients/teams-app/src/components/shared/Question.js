import React from "react";
import * as ReactRedux from "react-redux";

import {
  fetchQuestion,
  editAnswer,
  submitAnswer,
} from "../../reducers/roundReducer";
import Button from "./Button";
import { isValid } from "../../validation/validation"

class QuestionUI extends React.Component {
  render() {
    const answerHandler = (evt) => this.props.doEditAnswer(evt.target.value);
    const submitHandler = () => {
      if (isValid(document.getElementById("answer-form"))) {
        this.props.doSubmitAnswer()
      }
    };

    return (
      <div>
        <p className="question">{this.props.question}</p>
        <p>Category: {this.props.category}</p>

        <div style={{ marginBottom: "1em" }}>
          <form id="answer-form">
            <p>Answer:</p>
            <input required type="text" minLength="1" pattern="[a-zA-Z0-9]+" onChange={answerHandler}></input>
          </form>
        </div>
        <Button title="Submit answer" customClickEvent={submitHandler} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    question: state.round.question,
    category: state.round.category,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doEditAnswer: (answer) => dispatch(editAnswer(answer)),
    doSubmitAnswer: () => dispatch(submitAnswer()),
    doFetchQuestion: (questionid) => dispatch(fetchQuestion(questionid)),
  };
}

export const Question = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionUI);
