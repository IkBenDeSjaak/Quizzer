import React from "react";

export class Question extends React.Component {
  render() {
    return (
      <React.Fragment>
        <span>
          <b>{this.props.category}</b>
        </span>

        <div className="question">
          <span>
            <h3>{this.props.question}</h3>
          </span>
          <span
            className="questionButton"
            onClick={this.props.onQuestionClick(this.props.category)}
          >
            Start
          </span>
        </div>
      </React.Fragment>
    );
  }
}
