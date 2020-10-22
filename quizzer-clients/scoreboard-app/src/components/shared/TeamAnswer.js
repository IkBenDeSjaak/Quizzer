import React from "react";

export class TeamAnswer extends React.Component {
  render() {
    let checkmark = "";

    if (this.props.isCorrect !== undefined) {
      if (this.props.isCorrect) {
        checkmark = <>&#10004;</>;
      } else {
        checkmark = <>&#10006;</>;
      }
    }
    return (
      <React.Fragment>
        <p className="item">
          <b>{this.props.name}</b> answered <b>{this.props.answer}</b>{" "}
          <span className="correct">{checkmark}</span>
        </p>
      </React.Fragment>
    );
  }
}
