import React from "react";
import { connect } from "react-redux";

import { PageTitle } from "./shared/PageTitle";
import { TeamsApplications } from "./shared/TeamsApplications";
import Button from "./shared/Button";

class ApproveTeamsUI extends React.Component {
  componentDidMount() {
    if (this.props.roomid === null) {
      this.props.history.push("/");
    }
  }

  render() {
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
          // need to be props since they're used in the
          // start button
          teamNames={teamNames}
          approvedTeams={approvedTeams}
        />
        {startButton}
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
  return {};
}

export const ApproveTeams = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApproveTeamsUI);
