import React from "react";
import * as ReactRedux from "react-redux";

import {
  fetchQuestion,
  editAnswer,
  submitAnswer,
} from "../../reducers/roundReducer";
import Button from "./Button";
import { isValid } from "../../validation/validation";

class QuestionUI extends React.Component {
  render() {
    const answerHandler = (evt) => {
      if (isValid(document.getElementById("answerInput"))) {
        this.props.doEditAnswer(evt.target.value);
        // if the enter key is pressed
        if (evt.keyCode === 13) {
          evt.preventDefault();
          return this.props.doSubmitAnswer();
        }
      } else {
        this.props.doEditAnswer(null);
      }
    };
    const submitHandler = () => this.props.doSubmitAnswer();

    let formError = "";
    let button = [];
    if (this.props.formError) {
      formError = "You must enter a valid answer";
      button.push(
        <span key="formError" style={{ color: "red" }}>
          {formError}
        </span>
      );
    } else {
      button.push(<Button key="submitButton" title="Submit answer" />);
    }

    return (
      <div>
        <p className="question">{this.props.question}</p>
        <p>Category: {this.props.category}</p>

        <div style={{ marginBottom: "1em" }}>
          <form id="answer-form" onKeyDown={answerHandler}>
            <p>Answer:</p>
            <input
              id="answerInput"
              required
              type="text"
              minLength="1"
              pattern="[a-zA-Z0-9\s]+"
              onChange={answerHandler}
            />
          </form>
        </div>
        <span onClick={submitHandler}>{button}</span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    question: state.round.question,
    category: state.round.category,
    formError: state.round.formError,
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
