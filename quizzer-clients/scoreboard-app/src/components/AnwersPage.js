import React from "react";
import * as ReactRedux from "react-redux";

import { TeamAnswers } from "./shared/TeamAnswers";
import { RoundInfo } from "./shared/RoundInfo";
import { Question } from "./shared/Question";
import { CorrectAnswer } from "./shared/CorrectAnswer";

import { clearTeamAction, nextPageAction } from "../reducers/roomReducer";
import { nextQuestionAction, endRoundAction } from "../reducers/roundReducer";

class AnswersPageUI extends React.Component {
  componentDidMount() {
    if (this.props.roomid === null) {
      this.props.history.push("/");
    }
    this.teamNames = [];
    this.answers = [];
    this.isCorrect = [];
  }

  componentDidUpdate() {
    if (this.props.nextPage) {
      this.props.doNextPage(false);
      this.props.doClearTeams();
      this.props.doNextQuestion();
      this.props.history.push("/question");
    } else if (this.props.endRound) {
      this.props.doEndRound();
      this.props.history.push("/end-round");
    }
  }

  render() {
    return (
      <React.Fragment>
        <RoundInfo />
        <Question />
        <CorrectAnswer />
        <TeamAnswers />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    roomid: state.room.roomid,
    nextPage: state.room.nextPage,
    endRound: state.round.endRound,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doNextPage: (status) => dispatch(nextPageAction(status)),
    doClearTeams: () => dispatch(clearTeamAction()),
    doNextQuestion: () => dispatch(nextQuestionAction()),
    doEndRound: () => dispatch(endRoundAction()),
  };
}

export const AnswersPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswersPageUI);
