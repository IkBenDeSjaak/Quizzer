import React from "react";
import { connect } from "react-redux";

import { PageTitle } from "./shared/PageTitle";
import { TeamsApplications } from "./shared/TeamsApplications";
import Button from "./shared/Button";

import { approveTeam, disapproveTeam } from "../reducers/roomReducer";

import { sendMessage } from "../ws";

export class ApproveTeamsUI extends React.Component {
  render() {
    const onNewOkapiTeam = () =>
      sendMessage("NEW_TEAM", this.props.roomid, "Okapi");
    const onNewAlpacaTeam = () =>
      sendMessage("NEW_TEAM", this.props.roomid, "Alpaca");

    const onApproveTeam = (teamid) =>
      this.props.doApproveTeam(this.props.roomid, teamid);
    const onDisapproveTeam = (teamid) =>
      this.props.doDisapproveTeam(this.props.roomid, teamid);
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
            onApproveTeam(teamid);
          }}
          disapproveTeamClick={(teamid) => () => {
            onDisapproveTeam(teamid);
          }}
          approvedTeams={approvedTeams}
        />
        <Button
          title="Start quiz"
          customClickEvent={() => {
            nextPage()
          }}
        />
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
