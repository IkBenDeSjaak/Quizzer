import React from "react";
import * as ReactRedux from "react-redux";

class AnswerUI extends React.Component {
  render() {
    return (
      <div className="correctAnswer">
          <p>Correct Answer</p>
          <h2>{this.props.answer}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    answer: state.round.question.answer,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export const Answer = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerUI);