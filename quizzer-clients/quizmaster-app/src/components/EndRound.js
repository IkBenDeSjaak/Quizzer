import React from "react";
import { connect } from "react-redux";

import { PageTitle } from "./shared/PageTitle";
import Button from "./shared/Button";

import {
  endRoundAction,
  nextPageAction,
  clearRound,
} from "../reducers/roundReducer";
import { nextQuestionRoomAction, clearRoom } from "../reducers/roomReducer";
import {
  clearPointsAction,
  addRoundPoints,
} from "../reducers/roundPointsReducer";

class EndRoundUI extends React.Component {
  componentDidMount() {
    if (this.props.roomid === null) {
      this.props.history.push("/");
    }
    this.calculatedPoints = false;
  }

  componentDidUpdate() {
    if (
      !this.calculatedPoints &&
      this.props.teamsScore.length === this.props.teams.length
    ) {
      this.calculatedPoints = true;

      let sortedTeams = this.props.teamsScore;

      sortedTeams.sort(function (a, b) {
        return b.correct - a.correct;
      });

      // award 4 points to first place
      // award 2 points to second place
      // award 1 points to third place (if exists)
      sortedTeams.forEach((team) => {
        let points = 0.1;
        if (team.teamid === sortedTeams[0].teamid) {
          points = 4;
        } else if (team.teamid === sortedTeams[1].teamid) {
          points = 2;
        } else if (sortedTeams.length > 2) {
          if (team.teamid === sortedTeams[2].teamid) {
            points = 1;
          }
        }
        this.props.doAddRoundPoints(points, team.teamid);
      });

      this.props.doEndRound();
      this.props.doNextQuestionRoom();
    }

    if (this.props.nextPage) {
      this.props.doNextPage(false);
      this.props.history.push("/new-round");
    }
  }

  render() {
    return (
      <React.Fragment>
        <PageTitle
          title="Round ended"
          subtitle="You can start a new round or end the quiz"
        />
        <Button
          title="New round"
          customClickEvent={() => this.props.doClearPoints()}
        />
        <Button
          title="End quiz"
          customClickEvent={() => {
            this.props.doClearRoom();
            this.props.doClearRound();
            this.props.doClearPoints();
            this.props.doNextPage(false);
            this.props.history.push("/");
          }}
        />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    roomid: state.room.roomid,
    teams: state.room.teams,
    teamsScore: state.points.teams,
    nextPage: state.round.nextPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doEndRound: () => dispatch(endRoundAction()),
    doNextQuestionRoom: () => dispatch(nextQuestionRoomAction()),
    doClearPoints: () => dispatch(clearPointsAction()),
    doNextPage: (status) => dispatch(nextPageAction(status)),
    doAddRoundPoints: (roundPoints, teamid) =>
      dispatch(addRoundPoints(roundPoints, teamid)),
    doClearRoom: () => dispatch(clearRoom()),
    doClearRound: () => dispatch(clearRound()),
  };
}

export const EndRound = connect(
  mapStateToProps,
  mapDispatchToProps
)(EndRoundUI);
