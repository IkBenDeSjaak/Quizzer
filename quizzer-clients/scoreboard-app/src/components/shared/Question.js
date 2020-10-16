import React from "react";

export class Question extends React.Component {
  render() {
    return (
      <div className="clear">
        <h1>{this.props.question}</h1>
        <h2>Category: {this.props.category}</h2>
      </div>
    );
  }
}
