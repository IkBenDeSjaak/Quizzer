import React from "react";
import * as ReactRedux from "react-redux";

import Button from "./shared/Button";
import { PageTitle } from "./shared/PageTitle";
import { Answer } from "./shared/Answer";
import { TeamAnswers } from "./shared/TeamAnswers";

import { nextQuestionAction, closeQuestion } from "../reducers/roundReducer";
import { nextQuestionRoomAction } from "../reducers/roomReducer";
import { fetchCorrectQuestions } from "../reducers/roundPointsReducer";

import { sendMessage } from "../ws";

class AnswersPageUI extends React.Component {
  componentDidMount() {
    if (this.props.roomid === null) {
      this.props.history.push("/");
    }
  }

  render() {
    let button = "";
    if (this.props.questionClosed) {
      button = (
        <Button
          title="Next question"
          customClickEvent={() => {
            sendMessage("SHOW_ANSWERS", this.props.roomid, null);
            // check if a new round should be started
            if (Number.isInteger(this.props.questions.length / 12)) {
              // for each team
              // calculate points
              this.props.teams.forEach((team) => {
                this.props.doFetchCorrectQuestions(team.teamid);
              });

              // it won't bloody update
              // so I guess we'll push this part (including websocket)
              // to the next page
              // big brain ideas
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
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    roomid: state.room.roomid,
    teams: state.room.teams,
    question: state.round.question,
    questionClosed: state.round.questionClosed,
    questions: state.round.questions,
    teamsScore: state.points.teams,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doNextQuestion: () => dispatch(nextQuestionAction()),
    doNextQuestionRoom: () => dispatch(nextQuestionRoomAction()),
    doCloseQuestion: () => dispatch(closeQuestion()),
    doFetchCorrectQuestions: (teamid) =>
      dispatch(fetchCorrectQuestions(teamid)),
  };
}

export const AnswersPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswersPageUI);
