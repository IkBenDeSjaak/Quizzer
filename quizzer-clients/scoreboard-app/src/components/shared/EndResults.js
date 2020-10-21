import React from "react";

export class EndResults extends React.Component {
  render() {
    if (this.props.results !== undefined) {
      let div = [];
      this.props.results.map((result, index) => {
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
            <h1>Team {this.props.results[0].teamid}</h1>
          </div>
          {div}
        </div>
      );
    } else return <p>Something horrible has happened</p>;
  }
}
