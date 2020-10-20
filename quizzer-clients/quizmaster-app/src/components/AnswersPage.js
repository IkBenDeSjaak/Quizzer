import React from "react";
import * as ReactRedux from "react-redux";

import Button from "./shared/Button";
import { PageTitle } from "./shared/PageTitle";
import { Answer } from "./shared/Answer";
import { TeamAnswers } from "./shared/TeamAnswers";

import { nextQuestionAction, closeQuestion } from "../reducers/roundReducer";
import { nextQuestionRoomAction } from "../reducers/roomReducer";

import { sendMessage } from "../ws";

class AnswersPageUI extends React.Component {
  render() {
    const onNewAnswer = () =>
      sendMessage(
        "NEW_ANSWER",
        this.props.roomid,
        "Okapi",
        this.props.question._id
      );
    const onNewAlpacaAnswer = () =>
      sendMessage(
        "NEW_ANSWER",
        this.props.roomid,
        "Alpaca",
        this.props.question._id
      );

    let button = "";
    if (this.props.questionClosed) {
      button = (
        <Button
          title="Next question"
          customClickEvent={() => {
            sendMessage("SHOW_ANSWERS", this.props.roomid, null);
            // check if a new round should be started
            if (Number.isInteger(this.props.questions.length / 12)) {
              this.props.history.push("/end-round");
            } else {
              this.props.doNextQuestion();
              this.props.doNextQuestionRoom();
              this.props.history.push("/choose-question");
            }
          }}
        />
      );
    } else {
      button = (
        <Button
          title="Close question"
          customClickEvent={() => {
            sendMessage("CLOSE_QUESTION", this.props.roomid, null);
            this.props.doCloseQuestion();
          }}
        />
      );
    }

    return (
      <React.Fragment>
        <PageTitle
          title="Submitted Answers"
          subtitle="See who has answered what and (dis)approve answers."
        ></PageTitle>
        <Answer />
        <TeamAnswers />
        {button}
        <button onClick={onNewAnswer}>New Okapi Answer</button>
        <button onClick={onNewAlpacaAnswer}>New Alpaca Answer</button>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    roomid: state.room.roomid,
    question: state.round.question,
    questionClosed: state.round.questionClosed,
    questions: state.round.questions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doNextQuestion: () => dispatch(nextQuestionAction()),
    doNextQuestionRoom: () => dispatch(nextQuestionRoomAction()),
    doCloseQuestion: () => dispatch(closeQuestion()),
  };
}

export const AnswersPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswersPageUI);
