import React from "react";
import * as ReactRedux from "react-redux";

import { fetchRoomInfo, fetchQuestion } from "../../reducers/roundReducer";

class RoundInfoUI extends React.Component {
  render() {
    return (
      <div className="roundinfo">
        <h1 className="alignleft">Question {this.props.questionAmount}/12</h1>
        <h1 className="alignright">Round {this.props.round}</h1>
      </div>
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
