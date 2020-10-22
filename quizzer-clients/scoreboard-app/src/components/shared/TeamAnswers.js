import React from "react";
import * as ReactRedux from "react-redux";

import { TeamAnswer } from "./TeamAnswer";

class TeamAnswersUI extends React.Component {
  render() {
    if (this.props.teams !== null) {
      return (
        <div className="container">
          {this.props.teams.map((team, i) => {
            if (team.answer !== undefined) {
              return (
                <TeamAnswer
                  key={team.teamid}
                  name={team.teamid}
                  answer={team.answer}
                  isCorrect={team.isCorrect}
                />
              );
            }
            return "cool";
          })}
        </div>
      );
    } else {
      return <p>No answers</p>;
    }
  }
}

function mapStateToProps(state) {
  return {
    teams: state.room.teams,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export const TeamAnswers = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamAnswersUI);
