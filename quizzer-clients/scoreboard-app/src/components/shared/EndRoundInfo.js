import React from "react";

export class EndRoundInfo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>End of Round {this.props.round}</h2>
                <h2>{this.props.teams} teams</h2>
            </React.Fragment>
        );
    }
}
