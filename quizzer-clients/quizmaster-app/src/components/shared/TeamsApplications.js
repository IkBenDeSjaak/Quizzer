import React from "react";

export class TeamsApplications extends React.Component {
  render() {
    let noTeams = "No teams have signed up or all teams have been approved";
    if (this.props.teamNames.length > 0) {
      noTeams = "";
    }
    let noApproved = "No teams have been approved";
    let approved = [];
    if (this.props.approvedTeams.length > 0) {
      noApproved = "";
      approved.push(
        this.props.approvedTeams.map((teamName, index) => {
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
            {this.props.teamNames.map((teamName, index) => {
              return (
                <div key={teamName} className="item approveContainer">
                  <p>Team {teamName}</p>
                  <span
                    className="approveButton"
                    onClick={this.props.approveTeamClick(teamName)}
                  >
                    <>&#10004;</>
                  </span>
                  <span
                    className="approveButton"
                    onClick={this.props.disapproveTeamClick(teamName)}
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
