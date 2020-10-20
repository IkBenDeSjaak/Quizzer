import React from "react";
import * as ReactRedux from "react-redux";

import { PageTitle } from "./shared/PageTitle";
import { EndResults } from "./shared/EndResults";

class EndQuizPageUI extends React.Component {
  componentDidMount() {
    if(this.props.roomid === null) {
      this.props.history.push('/')
    }
  }
  
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
    roomid: state.room.roomid,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export const EndQuizPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(EndQuizPageUI);
