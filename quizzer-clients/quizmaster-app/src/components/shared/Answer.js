import React from "react";
import * as ReactRedux from "react-redux";

class AnswerUI extends React.Component {
  render() {
    let answer = "loading";
    if (this.props.roomid !== null) {
      answer = this.props.answer.answer;
    }
    return (
      <div className="correctAnswer">
        <p>Correct Answer</p>
        <h2>{answer}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    roomid: state.room.roomid,
    answer: state.round.question,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export const Answer = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerUI);
