import React from "react";

export class TeamsAnswered extends React.Component {
  render() {
    return (
      <div className="clear">
        <h1>Teams that have answered the question ({this.props.teamsAnswered}/{this.props.teamsAmount})</h1>
        {this.props.teamNames.map((name, i) => {
          return (<p key={name}>{name}</p>)
        })}
      </div>
    );
  }
}
