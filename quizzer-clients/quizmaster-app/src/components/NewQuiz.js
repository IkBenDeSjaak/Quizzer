import React from "react";
import Button from './Button'

export class NewQuiz extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>New quiz</h1>
        <p>On this page you can create a new quiz</p>
        <Button></Button>
      </React.Fragment>
    );
  }
}
