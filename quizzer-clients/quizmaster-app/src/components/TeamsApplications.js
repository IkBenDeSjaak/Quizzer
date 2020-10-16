import React from "react";
import { connect } from "react-redux";

import approve from "../approve.png"
import disapprove from "../disapprove.png"

import { approveTeam, disapproveTeam } from "../reducers/roomReducer";

class TeamsApplicationsUI extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>Room code: {this.props.roomid}</h2>
                <div>
                    <h4>Joined teams</h4>
                    <div>
                        {this.props.teams.map((team) => (
                            <div className="approveTeamContainer" key={team.name}>
                                <p>Team {team.name}</p>
                                {<img onClick={() => this.props.approveTeam(this.props.roomid, team.name)} src={approve} alt="Approve" height="25" width="25"></img>}
                                {<img onClick={() => this.props.disapproveTeam(this.props.roomid, team.name)} src={disapprove} alt="Approve" height="25" width="25"></img>}
                            </div>
                        ))}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        roomid: state.room.roomid,
        teams: state.room.teams
    }
}

function mapDispatchToProps(dispatch) {
    return {
        approveTeam: (roomid, teamName) => dispatch(approveTeam(roomid, teamName)),
        disapproveTeam: (roomid, teamName) => dispatch(disapproveTeam(roomid, teamName))
    }
}

export const TeamsApplications =
    connect(mapStateToProps, mapDispatchToProps)(TeamsApplicationsUI);