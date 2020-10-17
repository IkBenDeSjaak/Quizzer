import React from "react";
import * as ReactRedux from "react-redux";

import { TeamAnswers } from "./shared/TeamAnswers";
import { RoundInfo } from "./shared/RoundInfo";
import { Question } from "./shared/Question";
import { CorrectAnswer } from "./shared/CorrectAnswer";

import { nextQuestionAction } from "../reducers/roomReducer";

import { sendMessage } from "../ws";

export class AnswersPageUI extends React.Component {
  componentDidMount() {
    this.teamNames = [];
    this.answers = [];
    this.isCorrect = [];
  }

  componentDidUpdate() {
    if (this.props.nextQuestion) {
      this.props.doNextQuestion();
      this.props.history.push("/question");
    }
  }

  render() {
    const roomid = this.props.roomid;
    const onQuestion = () => sendMessage("NEW_QUESTION", roomid, null);

    if (this.props.teams.length > 0) {
      this.teamNames = []
      this.answers = []
      this.isCorrect = []
      this.props.teams.forEach((team) => {
        this.teamNames.push(team.teamid);
      });
      this.props.teams.forEach((team) => {
        this.answers.push(team.answer);
      });
      this.props.teams.forEach((team) => {
        this.isCorrect.push(team.isCorrect);
      });
    }

    return (
      <React.Fragment>
        <RoundInfo
          question={this.props.teamsAmount}
          round={this.props.roundAmount}
        />
        <Question
          question={this.props.question}
          category={this.props.category}
        />
        <CorrectAnswer answer={this.props.lastAnswer} />
        <TeamAnswers
          teamsAnswered={this.props.teams.length}
          teamsAmount={this.props.teamsAmount}
          teamNames={this.teamNames}
          answers={this.answers}
          isCorrect={this.isCorrect}
        />
        <button onClick={onQuestion}>New question</button>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    nextQuestion: state.scoreboard.stopLoading,
    roomid: state.scoreboard.roomid,
    teamsAmount: state.room.teamsAmount,
    roundAmount: state.room.roundAmount,
    question: state.room.lastQuestion,
    category: state.room.lastCategory,
    lastAnswer: state.room.lastAnswer,
    teams: state.room.teams,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doNextQuestion: () => dispatch(nextQuestionAction()),
  };
}

export const AnswersPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswersPageUI);
