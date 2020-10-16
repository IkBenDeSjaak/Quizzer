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
  }

  componentDidUpdate() {
    this.props.doFetchQuestion(this.props.lastQuestionid);

    if(this.props.teams.length === this.props.teamsAmount) {
        this.props.history.push("/answers");
    }
  }

  render() {
    const roomid = this.props.roomid;
    const onQuestion = () => sendMessage("NEW_ANSWER", roomid, 234509);
    const teamNames = []
    
    this.props.teams.forEach(team => {
        teamNames.push(team.teamid)
    });

    return (
      <React.Fragment>
        <RoundInfo
          question={this.props.teamsAmount}
          round={this.props.roundAmount}
        />
        <Question
          question={this.props.question}
          category={this.props.category}
        />
        <TeamsAnswered
          teamsAnswered={this.props.teams.length}
          teamsAmount={this.props.teamsAmount}
          teamNames={teamNames}
        />

        <button onClick={onQuestion}>New answer</button>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    teams: state.room.teams,
    roomid: state.scoreboard.roomid,
    questionAmount: state.room.questionAmount,
    lastQuestionid: state.room.lastQuestionid,
    roundAmount: state.room.roundAmount,
    teamsAmount: state.room.teamsAmount,
    question: state.room.lastQuestion,
    category: state.room.lastCategory,
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
