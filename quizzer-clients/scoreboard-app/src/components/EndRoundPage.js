import React from "react";
import * as ReactRedux from "react-redux";

import { PageTitle } from "./shared/PageTitle";
import { EndRoundInfo } from "./shared/EndRoundInfo";
import { TeamResults } from "./shared/TeamResults";

import { fetchPoints } from "../reducers/roomReducer";

export class EndRoundPageUI extends React.Component {
  componentDidMount() {
    this.teamNames = [];
    this.points = [];

    this.props.teams.forEach((team) => {
      this.props.doFetchPoints(this.props.roomid, team.teamid);
    });
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
        <TeamResults teamNames={this.teamNames} points={this.points} rounds={this.props.rounds} roundAmount={this.props.round} />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    roomid: state.scoreboard.roomid,
    round: state.room.roundAmount,
    teamsAmount: state.room.teamsAmount,
    teams: state.room.teams,
    teamPoints: state.room.teamPoints,
    rounds: state.room.rounds,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doFetchPoints: (roomid, teamid) => dispatch(fetchPoints(roomid, teamid)),
  };
}

export const EndRoundPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(EndRoundPageUI);
