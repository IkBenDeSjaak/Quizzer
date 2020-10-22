import React from "react";
import * as ReactRedux from "react-redux";

import { PageTitle } from "./shared/PageTitle";
import { EndRoundInfo } from "./shared/EndRoundInfo";
import { TeamResults } from "./shared/TeamResults";

import { endQuizAction, nextQuestionAction } from "../reducers/roundReducer";
import { nextPageAction, clearTeamAction } from "../reducers/roomReducer";
import { fetchPoints, clearPoints } from "../reducers/pointsReducer";

class EndRoundPageUI extends React.Component {
  componentDidMount() {
    if (this.props.roomid === null) {
      this.props.history.push("/");
    }

    if (this.props.teams.length > 0) {
      this.props.teams.forEach((team) => {
        this.props.doFetchPoints(this.props.roomid, team.teamid);
      });
    }
  }

  componentDidUpdate() {
    if (this.props.endQuiz) {
      this.props.doEndQuiz();
      this.props.history.push("/end-quiz");
    } else if (this.props.nextPage) {
      this.props.doNextPage(false);
      this.props.doClearTeams();
      this.props.doClearPoints();
      this.props.doNextQuestion();
      this.props.history.push("/question");
    }
  }

  render() {
    return (
      <React.Fragment>
        <PageTitle title="Score overview" />
        <EndRoundInfo />
        <TeamResults />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    roomid: state.room.roomid,
    endQuiz: state.round.endQuiz,
    nextPage: state.room.nextPage,
    teams: state.room.teams,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doNextPage: (status) => dispatch(nextPageAction(status)),
    doFetchPoints: (roomid, teamid) => dispatch(fetchPoints(roomid, teamid)),
    doEndQuiz: () => dispatch(endQuizAction()),
    doNextQuestion: () => dispatch(nextQuestionAction()),
    doClearTeams: () => dispatch(clearTeamAction()),
    doClearPoints: () => dispatch(clearPoints()),
  };
}

export const EndRoundPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(EndRoundPageUI);
