import React from "react";
import * as ReactRedux from "react-redux";

class EndRoundInfoUI extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>End of Round {this.props.round}</h2>
        <h2>{this.props.teams.length} teams</h2>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    round: state.round.roundAmount,
    teams: state.room.teams,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export const EndRoundInfo = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(EndRoundInfoUI);
