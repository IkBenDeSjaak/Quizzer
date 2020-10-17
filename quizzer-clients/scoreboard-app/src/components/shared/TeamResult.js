import React from "react";

export class TeamResult extends React.Component {
  render() {
    var span = [];
    for (let i = 0; i < this.props.roundAmount; i++) {
      span.push(
        <span key={this.props.name + " round " + i} className="round">
          Round {i + 1}: <br></br> {this.props.rounds[i]} questions <br></br>{" "}
          correct
        </span>
      );
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
