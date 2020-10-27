import React from "react";
import * as ReactRedux from "react-redux";

import { fetchRoomInfo, fetchQuestion } from "../../reducers/roundReducer";

class RoundInfoUI extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Question {this.props.questionAmount}/12</h1>
        <h2>Round {this.props.round}</h2>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    round: state.round.roundAmount,
    question: state.round.question,
    questionAmount: state.round.questionAmount,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doFetchRoomInfo: (roomid) => dispatch(fetchRoomInfo(roomid)),
    doFetchQuestion: (questionid) => dispatch(fetchQuestion(questionid)),
  };
}

export const RoundInfo = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(RoundInfoUI);
