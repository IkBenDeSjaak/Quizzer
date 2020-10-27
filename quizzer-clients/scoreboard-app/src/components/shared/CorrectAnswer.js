import React from "react";
import * as ReactRedux from "react-redux";

class CorrectAnswerUI extends React.Component {
  render() {
    return (
      <div className="clear">
        <div>
          <h2>Correct Answer: {this.props.answer}</h2>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    answer: state.round.answer,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export const CorrectAnswer = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(CorrectAnswerUI);
