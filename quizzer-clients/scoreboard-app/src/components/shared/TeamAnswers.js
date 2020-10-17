import React from "react";

import { TeamAnswer } from "./TeamAnswer";

export class TeamAnswers extends React.Component {
  render() {
    if (this.props.answers !== undefined) {
      const answers = this.props.answers;
      const isCorrect = this.props.isCorrect;
      return (
        <div className="container">
          {this.props.teamNames.map((name, i) => {
            return (
              <TeamAnswer
                key={name}
                name={name}
                answer={answers[i]}
                isCorrect={isCorrect[i]}
              />
            );
          })}
        </div>
      );
    } else {
      return (<p>No answers</p>)
    }
  }
}
