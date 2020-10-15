import React from "react";
import * as ReactRedux from "react-redux";

import Button from "./Button";

import { createNewQuiz } from "../reducers/buttonsReducer";

export class NewQuizUI extends React.Component {
  render() {
    if (this.props.roomid !== null) {
      // TODO: seems to break the NavLink in NavBar
      this.props.history.push("/teams-application");
    }
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
    roomid: state.buttons.roomid
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
