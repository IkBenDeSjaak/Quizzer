import React from "react";
import { connect } from "react-redux";

import approve from "../approve.png"
import disapprove from "../disapprove.png"

import { approveTeam } from "../reducers/roomReducer";

class TeamsApplicationsUI extends React.Component {
    render() {
        console.log(this.props.teams)
        return (
            <React.Fragment>
                <h2>Room code: </h2>
                <div>
                    <h4>Joined teams</h4>
                    <div>
                        {this.props.teams.map((team) => (
                            <div className="approveTeamContainer" key={team.name}>
                                <p>Team {team.name}</p>
                                { <img onClick={() => this.props.approveTeam(this.props.roomid, team.name)} src={approve} alt="Approve" height="25" width="25"></img>}
                            </div>
                        ))}

                        {/* <img onClick={() => this.props.disapproveTeam(teams.roomid, teams.id)} src={disapprove} alt="Approve" height="25" width="25"></img> */}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        roomid: state.room.id,
        teams: state.room.teams
    }
}

function mapDispatchToProps(dispatch) {
    return {
        approveTeam: (roomid, teamName) => dispatch(approveTeam(roomid, teamName)),
        // disapproveTeam: () => dispatch(disapproveTeam(roomid, teamid))
    }
}

export const TeamsApplications =
    connect(mapStateToProps, mapDispatchToProps)(TeamsApplicationsUI);