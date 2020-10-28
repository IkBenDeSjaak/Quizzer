import React from "react";

export class TeamResult extends React.Component {
  render() {
    var span = [];
    if (this.props.rounds) {
      for (let i = 0; i < this.props.roundAmount; i++) {
        let points;
        if (this.props.rounds[i] === undefined) {
          points = 0;
        } else {
          points = this.props.rounds[i];
        }

        span.push(
          <span key={this.props.name + " round " + i} className="round">
            Round {i + 1}: <br></br> {points} questions <br></br> correct
          </span>
        );
      }
    }

    return (
      <React.Fragment>
        <p className="item">
          <b>{this.props.name}</b> got <b>{this.props.points} points</b>
          {span.reverse()}
        </p>
      </React.Fragment>
    );
  }
}
