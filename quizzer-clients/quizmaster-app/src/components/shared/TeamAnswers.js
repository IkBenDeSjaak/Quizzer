import React from "react";
import * as ReactRedux from "react-redux";

import { approveAnswerAction } from "../../reducers/roomReducer";

class TeamAnswersUI extends React.Component {
  render() {
    let answers = [];
    let button = "";

    if (this.props.teams !== undefined && this.props.teams.length > 0) {
      this.props.teams.map((team, i) => {
        if (team.answer !== undefined && team.answer !== null) {
          // if answer is closed, show buttons
          // to (dis)approve answer
          if (
            this.props.questionClosed &&
            this.props.teams[i].answerCorrect === undefined
          ) {
            button = (
              <React.Fragment>
                <span
                  className="answerButton"
                  onClick={() => this.props.doApproveAnswer(true, team.teamid)}
                >
                  Approve
                </span>
                <span
                  className="answerButton"
                  onClick={() => this.props.doApproveAnswer(false, team.teamid)}
                >
                  Disapprove
                </span>
              </React.Fragment>
            );
          } else if (this.props.teams[i].answerCorrect === true) {
            button = (
              <React.Fragment>
                <span className="answerButton approved">Approved</span>
              </React.Fragment>
            );
          } else if (this.props.teams[i].answerCorrect === false) {
            button = (
              <React.Fragment>
                <span className="answerButton disapproved">Disapproved</span>
              </React.Fragment>
            );
          }

          // add a new answer
          answers.push(
            <div key={team.teamid} className="answer">
              <span>
                <p>Team {team.teamid} answered</p>
                <h3>{team.answer}</h3>
              </span>
              {button}
            </div>
          );
        }
        return answers;
      });
    }
    return (
      <React.Fragment>
        <h2>Team answers</h2>
        {answers}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    teams: state.room.teams,
    questionClosed: state.round.questionClosed,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doApproveAnswer: (status, teamid) =>
      dispatch(approveAnswerAction(status, teamid)),
  };
}

export const TeamAnswers = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamAnswersUI);
