import React from "react";
import * as ReactRedux from "react-redux";

class TeamsAnsweredUI extends React.Component {
  render() {
    if (this.props.teams !== null) {
      if (this.props.teams.length > 0) {
        return (
          <div className="clear">
            <h1>
              Teams that have answered the question ({this.props.teams.length}/
              {this.props.teamsAmount})
            </h1>
            {this.props.teams.map((team, i) => {
              return <p key={team}>{team}</p>;
            })}
          </div>
        );
      } else {
        return (
          <div className="clear">
            <h1>No teams have answered yet</h1>
          </div>
        );
      }
    } else {
      return (
        <div className="clear">
          <h1>No teams have answered yet</h1>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    teams: state.room.tempTeams,
    teamsAmount: state.round.teamsAmount,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export const TeamsAnswered = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsAnsweredUI);
