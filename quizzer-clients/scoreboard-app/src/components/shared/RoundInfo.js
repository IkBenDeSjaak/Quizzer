import React from "react";

export class RoundInfo extends React.Component {
  render() {
    return (
      <div className="roundinfo">
        <h1 className="alignleft">Question {this.props.question}/12</h1>
        <h1 className="alignright">Round {this.props.round}</h1>
      </div>
    );
  }
}
