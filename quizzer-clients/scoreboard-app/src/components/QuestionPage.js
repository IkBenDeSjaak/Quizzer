import React from "react";
import * as ReactRedux from "react-redux";

import { TeamsAnswered } from "./shared/TeamsAnswered";
import { RoundInfo } from "./shared/RoundInfo";
import { Question } from "./shared/Question";

import { fetchRoomInfo, fetchQuestion } from "../reducers/roomReducer";

import { sendMessage } from "../ws";

export class QuestionPageUI extends React.Component {
  componentDidMount() {
    this.props.doFetchRoomInfo(this.props.roomid);
    this.teamNames = [];
  }

  componentDidUpdate() {
    // TODO: only fetch it once when the page loads (but after doFetchRoomInfo)
    this.props.doFetchQuestion(this.props.lastQuestionid);

    if (this.props.closeQuestion) {
      this.props.history.push("/answers");
    }

  }

  render() {
    const roomid = this.props.roomid;
    const onQuestion = () => sendMessage("NEW_ANSWER", roomid, "Alpaca");
    const onQuestionKoala = () => sendMessage("NEW_ANSWER", roomid, "Koala");
    const closeQuestion = () => sendMessage("CLOSE_QUESTION", roomid, null);

    // Only add if the team name isn't in there yet
    if (this.props.teams.length > 0) {
      this.teamNames = []
      this.props.teams.forEach((team) => {
        this.teamNames.push(team.teamid);
      });
    }
    
    return (
      <React.Fragment>
        {/* Rouninfo doesn't rerender with the new props? */}
        <RoundInfo
          question={this.props.questionAmount}
          round={this.props.roundAmount}
        />
        <Question
          question={this.props.question}
          category={this.props.category}
        />
        <TeamsAnswered
          teamsAnswered={this.props.teams.length}
          teamsAmount={this.props.teamsAmount}
          teamNames={this.teamNames}
        />

        <button onClick={onQuestion}>New answer</button>
        <button onClick={onQuestionKoala}>New koala answer</button>
        <button onClick={closeQuestion}>Close question</button>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    teams: state.room.teams,
    roomid: state.room.roomid,
    questionAmount: state.room.questionAmount,
    lastQuestionid: state.room.lastQuestionid,
    roundAmount: state.room.roundAmount,
    teamsAmount: state.room.teamsAmount,
    question: state.room.lastQuestion,
    category: state.room.lastCategory,
    closeQuestion: state.room.closeQuestion,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doFetchRoomInfo: (roomid) => dispatch(fetchRoomInfo(roomid)),
    doFetchQuestion: (questionid) => dispatch(fetchQuestion(questionid)),
  };
}

export const QuestionPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionPageUI);
