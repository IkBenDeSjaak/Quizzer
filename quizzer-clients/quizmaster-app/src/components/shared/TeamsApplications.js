import React from "react";
import { connect } from "react-redux";

import { approveTeam, disapproveTeam } from "../../reducers/roomReducer";

class TeamsApplicationsUI extends React.Component {
  render() {
    let teamNames = this.props.teamNames;
    let approvedTeams = this.props.approvedTeams;

    let noTeams = "No teams have signed up or all teams have been approved";
    if (teamNames.length > 0) {
      noTeams = "";
    }

    let noApproved = "No teams have been approved";
    let approved = [];
    if (approvedTeams.length > 0) {
      noApproved = "";
      approved.push(
        approvedTeams.map((teamName, index) => {
          return (
            <p key={teamName} className="item">
              Team {teamName}
            </p>
          );
        })
      );
    }

    return (
      <React.Fragment>
        <h2>Room code: {this.props.roomid}</h2>
        <div>
          <h2>Joined teams</h2>
          {noTeams}
          <div className="container">
            {teamNames.map((teamName, index) => {
              return (
                <div key={teamName} className="item approveContainer">
                  <p>Team {teamName}</p>
                  <span
                    className="approveButton"
                    onClick={() =>
                      this.props.doApproveTeam(this.props.roomid, teamName)
                    }
                  >
                    <>&#10004;</>
                  </span>
                  <span
                    className="approveButton"
                    onClick={() =>
                      this.props.doDisapproveTeam(this.props.roomid, teamName)
                    }
                  >
                    <>&#10006;</>
                  </span>
                </div>
              );
            })}
          </div>
          <h2>Approved teams</h2>
          <p>{noApproved}</p>
          <div className="container">{approved}</div>
        </div>
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

export const TeamsApplications = connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsApplicationsUI);
