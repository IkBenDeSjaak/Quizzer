import React from "react";
import * as ReactRedux from "react-redux";

class EndResultsUI extends React.Component {
  render() {
    let results = [];
    this.props.teams.map((team, index) => {
      results = [
        ...results,
        {
          teamid: team.teamid,
          teamPoints: team.roundPoints,
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

    if (results.length > 0) {
      let div = [];
      results.map((result, index) => {
        if (index > 0) {
          div.push(
            <div key={result.teamid} className="result">
              <h2>Place {index + 1}:</h2>
              <p>Team {result.teamid}</p>
            </div>
          );
        }
        return div;
      });

      return (
        <div className="results">
          <div className="result">
            <h1>Winner:</h1>
            <h1>Team {results[0].teamid}</h1>
          </div>
          {div}
        </div>
      );
    } else return <p>Something horrible has happened</p>;
  }
}

function mapStateToProps(state) {
  return {
    teams: state.points.teams,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export const EndResults = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(EndResultsUI);
