import React from "react";
import * as ReactRedux from "react-redux";

import { PageTitle } from "./shared/PageTitle";
import { EndResults } from "./shared/EndResults";

export class EndQuizPageUI extends React.Component {
  render() {
    let results = [];
    this.props.teams.map((team, index) => {
      results = [
        ...results,
        {
          teamid: team.teamid,
          teamPoints: this.props.teamPoints[index].roundPoints,
        },
      ];
      return results;
    });
    function compare(a, b) {
      if (a.teamPoints > b.teamPoints) {
        return -1;
      }
      if (a.teamPoints < b.teamPoints) {
        return 1;
      }
      return 0;
    }
    results.sort(compare);
    return (
      <React.Fragment>
        <PageTitle title="End of the quiz" />
        <EndResults results={results} />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    teamPoints: state.room.teamPoints,
    teams: state.room.teams,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //   doFetchTeams: (roomid, teamid) => dispatch(fetchPoints(roomid, teamid)),
  };
}

export const EndQuizPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(EndQuizPageUI);
