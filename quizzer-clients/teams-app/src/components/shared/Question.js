import React from "react";
import * as ReactRedux from "react-redux";

import {
  fetchQuestion,
  editAnswer,
  submitAnswer,
} from "../../reducers/roundReducer";
import Button from "./Button";

class QuestionUI extends React.Component {
  render() {
    const answerHandler = (evt) => this.props.doEditAnswer(evt.target.value);
    const submitHandler = () => this.props.doSubmitAnswer();

    return (
      <div>
        <p className="question">{this.props.question}</p>
        <p>Category: {this.props.category}</p>

        <div style={{ marginBottom: "1em" }}>
          <p>Answer:</p>
          <input required type="text" onChange={answerHandler}></input>
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
