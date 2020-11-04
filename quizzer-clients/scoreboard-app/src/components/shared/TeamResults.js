import React from "react";
import * as ReactRedux from "react-redux";

import { TeamResult } from "./TeamResult";

import { nextPageAction } from "../../reducers/roomReducer";
import {
  nextQuestionAction,
  endRoundAction,
} from "../../reducers/roundReducer";

class TeamResultsUI extends React.Component {
  render() {
    if (this.props.teams !== undefined && this.props.teams.length > 0) {
      return (
        <div className="container">
          {this.props.teams.map((team, i) => {
            if (team.rounds === 0) {
              team.rounds = null;
            }
            return (
              <TeamResult
                key={team.teamid}
                name={team.teamid}
                points={team.roundPoints}
                rounds={team.rounds}
                roundAmount={this.props.roundAmount}
              />
            );
          })}
        </div>
      );
    } else {
      return <p>Something went horribly wrong...</p>;
    }
  }
}

function mapStateToProps(state) {
  return {
    teams: state.points.teams,
    roundAmount: state.round.roundAmount,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doNextPage: (status) => dispatch(nextPageAction(status)),
    doNextQuestion: () => dispatch(nextQuestionAction()),
    doEndRound: () => dispatch(endRoundAction()),
  };
}

export const TeamResults = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamResultsUI);
