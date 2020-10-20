import React from "react";
import * as ReactRedux from "react-redux";

import { PageTitle } from "./shared/PageTitle";
import { EndRoundInfo } from "./shared/EndRoundInfo";
import { TeamResults } from "./shared/TeamResults";

import { fetchPoints, endQuizAction, nextQuestionAction } from "../reducers/roomReducer";

class EndRoundPageUI extends React.Component {
  componentDidMount() {
    if(this.props.roomid === null) {
      this.props.history.push('/')
    }
    this.teamNames = [];
    this.points = [];

    this.props.teams.forEach((team) => {
      this.props.doFetchPoints(this.props.roomid, team.teamid);
    });
  }

  componentDidUpdate() {
    if (this.props.endQuiz) {
      this.props.doEndQuiz();
      this.props.history.push("/endquiz")
    } else if (this.props.nextQuestion) {
      this.props.doNextQuestion();
      this.props.history.push("/question");
    }
  }
  render() {
    if (this.props.teams.length > 0) {
      this.teamNames = [];
      this.points = [];
      this.props.teams.forEach((team) => {
        this.teamNames.push(team.teamid);
      });
      this.props.teamPoints.forEach((team) => {
        this.points.push(team.roundPoints);
      });
    }

    return (
      <React.Fragment>
        <PageTitle title="Score overview" />
        <EndRoundInfo round={this.props.round} teams={this.props.teamsAmount} />
        <TeamResults
          teamNames={this.teamNames}
          points={this.points}
          rounds={this.props.rounds}
          roundAmount={this.props.round}
        />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    roomid: state.room.roomid,
    nextQuestion: state.room.stopLoading,
    round: state.room.roundAmount,
    teamsAmount: state.room.teamsAmount,
    teams: state.room.teams,
    teamPoints: state.room.teamPoints,
    rounds: state.room.rounds,
    endQuiz: state.room.endQuiz
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doFetchPoints: (roomid, teamid) => dispatch(fetchPoints(roomid, teamid)),
    doEndQuiz: () => dispatch(endQuizAction()),
    doNextQuestion: () => dispatch(nextQuestionAction()),
  };
}

export const EndRoundPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(EndRoundPageUI);
