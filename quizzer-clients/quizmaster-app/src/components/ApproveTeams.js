import React from "react";
import { connect } from "react-redux";

import { PageTitle } from "./shared/PageTitle";
import { TeamsApplications } from "./shared/TeamsApplications";
import Button from "./shared/Button";

import { approveTeam, disapproveTeam } from "../reducers/roomReducer";

import { sendMessage } from "../ws";

class ApproveTeamsUI extends React.Component {
  componentDidMount() {
    if (this.props.roomid === null) {
      this.props.history.push("/");
    }
  }

  render() {
    const onNewOkapiTeam = () =>
      sendMessage("NEW_TEAM", this.props.roomid, "Okapi");
    const onNewAlpacaTeam = () =>
      sendMessage("NEW_TEAM", this.props.roomid, "Alpaca");

    const nextPage = () => this.props.history.push("/new-round");

    let teamNames = [];
    let approvedTeams = [];

    if (this.props.teams.length > 0) {
      this.props.teams.forEach((team) => {
        if (team.isApproved) {
          approvedTeams.push(team.teamid);
          let index = teamNames.indexOf(team.teamid);
          if (index > -1) {
            teamNames.splice(index, 1);
          }
        } else {
          teamNames.push(team.teamid);
        }
      });
    }

    let startButton = [];
    if (approvedTeams.length > 1 && teamNames.length < 1) {
      startButton.push(
        <Button
          key="button"
          title="Start quiz"
          customClickEvent={() => {
            nextPage();
          }}
        />
      );
    }

    return (
      <React.Fragment>
        <PageTitle
          title="New quiz"
          subtitle="Approve or disapprove incoming teams from participating in the quiz"
        />
        <TeamsApplications
          roomid={this.props.roomid}
          teamNames={teamNames}
          approveTeamClick={(teamid) => () => {
            this.props.doApproveTeam(this.props.roomid, teamid);
          }}
          disapproveTeamClick={(teamid) => () => {
            this.props.doDisapproveTeam(this.props.roomid, teamid);
          }}
          approvedTeams={approvedTeams}
        />
        {startButton}
        <button onClick={onNewOkapiTeam}>New Okapi team</button>
        <button onClick={onNewAlpacaTeam}>New Alpaca team</button>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    roomid: state.room.roomid,
    teams: state.room.teams,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doApproveTeam: (roomid, teamName) =>
      dispatch(approveTeam(roomid, teamName)),
    doDisapproveTeam: (roomid, teamName) =>
      dispatch(disapproveTeam(roomid, teamName)),
  };
}

export const ApproveTeams = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApproveTeamsUI);
