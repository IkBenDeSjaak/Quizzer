import React from "react";
import * as ReactRedux from "react-redux";
import { NavLink } from "react-router-dom";

import spinner from "../assets/spinner.svg";

import { nextPageAction } from "../reducers/roomReducer";
import Button from "./shared/Button";

class WaitPageUI extends React.Component {
  componentDidMount() {
    if (this.props.roomid === null) {
      this.props.history.push("/");
    }
  }

  componentDidUpdate() {
    if (this.props.nextPage) {
      this.props.doNextPage(false);
      this.props.history.push("/question");
    } else if (this.props.quizEnded) {
      this.props.history.push("/end");
    }
  }

  render() {
    let div = "Quiz master is checking your teamname...";
    let link = "";
    
    if (
      this.props.teamName !== null &&
      this.props.tempAnswer === null &&
      this.props.answer === null &&
      this.props.questionClosed !== true
    ) {
      div = "Team approved!";
    } else if (this.props.tempName === null && this.props.teamName === null) {
      div = "Team disapproved, redirecting to home";
      setTimeout(() => this.props.history.push("/"), 5000);
    } else if (this.props.tempAnswer !== null && this.props.answer === null) {
      div = "Submitted answer: " + this.props.tempAnswer;
      link = (
        <NavLink to="/question">
          <Button title="Change your answer" />
        </NavLink>
      );
    } else if (this.props.isCorrect !== null) {
      if (this.props.isCorrect === false) {
        div = "Your answer was wrong!";
      } else if (this.props.isCorrect) {
        div = "Your answer was correct!";
      }
    } else if (
      this.props.questionClosed === true
    ) {
      div = "Question is closed";
    }

    return (
      <div className="waitpage">
        <h1>Waiting for quiz master...</h1>
        {div}
        <span style={{ marginTop: "2em", display: "block" }}>{link}</span>

        <img src={spinner} height="300" width="300" alt="Spinner" />
        <br></br>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    nextPage: state.room.nextPage,
    roomid: state.room.roomid,
    teamName: state.room.teamName,
    tempName: state.room.tempTeamName,
    tempAnswer: state.round.tempAnswer,
    answer: state.round.answer,
    isCorrect: state.round.isCorrect,
    quizEnded: state.room.quizEnded,
    questionClosed: state.round.questionClosed,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doNextPage: (status) => dispatch(nextPageAction(status)),
  };
}

export const WaitPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(WaitPageUI);
