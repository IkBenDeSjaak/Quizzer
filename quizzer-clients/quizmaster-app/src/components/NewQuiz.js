import React from "react";
import * as ReactRedux from "react-redux";

import Button from "./shared/Button";

import { createNewQuiz } from "../reducers/roomReducer";

export class NewQuizUI extends React.Component {
  componentDidUpdate() {
    if (this.props.roomid !== null) {
      this.props.history.push("/teams-application");
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>New quiz</h1>
        <p>On this page you can create a new quiz</p>
        <Button
          title="Start quiz"
          customClickEvent={this.props.doCreateNewQuiz}
        ></Button>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    roomid: state.room.roomid
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doCreateNewQuiz: () => dispatch(createNewQuiz()),
  };
}

export const NewQuiz = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(NewQuizUI);
