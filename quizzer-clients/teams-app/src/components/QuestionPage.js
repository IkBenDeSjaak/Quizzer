import React from "react";
import * as ReactRedux from "react-redux";

import { Question } from "./shared/Question";
import { RoundInfo } from "./shared/RoundInfo";

import { nextPageAction } from "../reducers/roomReducer";
import { fetchRoomInfo, fetchQuestion } from "../reducers/roundReducer";

class QuestionPageUI extends React.Component {
  componentDidMount() {
    if (this.props.roomid === null) {
      this.props.history.push("/");
    }
    this.props.doFetchRoomInfo();
  }

  componentDidUpdate() {
    if (this.props.nextPage) {
      this.props.doNextPage(false);
      this.props.history.push("/wait");
    } else if(this.props.questionClosed) {
      this.props.history.push("/wait")
    }
    
    if (this.props.questionid !== null && this.props.question === null) {
      this.props.doFetchQuestion(this.props.questionid);
    }
  }

  render() {
    return (
      <React.Fragment>
        <RoundInfo />
        <Question />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    nextPage: state.room.nextPage,
    roomid: state.room.roomid,
    questionid: state.round.questionid,
    question: state.round.question,
    questionClosed: state.round.questionClosed,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doNextPage: (status) => dispatch(nextPageAction(status)),
    doFetchRoomInfo: () => dispatch(fetchRoomInfo()),
    doFetchQuestion: (questionid) => dispatch(fetchQuestion(questionid)),
  };
}

export const QuestionPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionPageUI);
