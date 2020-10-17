import React from "react";

import { TeamResult } from "./TeamResult"

export class TeamResults extends React.Component {
  render() {
    if(this.props.teamNames !== undefined && this.props.teamNames.length === this.props.rounds.length) {
      return (
        <div className="container">
          {this.props.teamNames.map((name, i) => {
            return (
              <TeamResult key={name} name={name} points={this.props.points[i]} rounds={this.props.rounds[i]} roundAmount={this.props.roundAmount} />
            )
          })}
        </div>
      );
    } else {
      return (<p>Something went horribly wrong...</p>)
    }
  }
}
