import React from "react";
import * as ReactRedux from "react-redux";

import { TeamsAnswered } from "./shared/TeamsAnswered";
import { RoundInfo } from "./shared/RoundInfo";
import { Question } from "./shared/Question";

import { fetchRoomInfo, fetchQuestion } from "../reducers/roundReducer";

class QuestionPageUI extends React.Component {
  componentDidMount() {
    if (this.props.roomid === null) {
      this.props.history.push("/");
    }
    this.props.doFetchRoomInfo();
  }

  componentDidUpdate() {
    if (this.props.questionid !== null && this.props.question === null) {
      this.props.doFetchQuestion(this.props.questionid);
    }

    if (this.props.closeQuestion) {
      this.props.history.push("/answers");
    }
  }

  render() {
    return (
      <React.Fragment>
        <RoundInfo />
        <Question />
        <TeamsAnswered />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    teams: state.room.teams,
    roomid: state.room.roomid,
    question: state.round.question,
    questionid: state.round.questionid,
    closeQuestion: state.round.closeQuestion,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doFetchRoomInfo: () => dispatch(fetchRoomInfo()),
    doFetchQuestion: (questionid) => dispatch(fetchQuestion(questionid)),
  };
}

export const QuestionPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionPageUI);
