import React from "react";

import { PageTitle } from "./shared/PageTitle"
import { EndRoundInfo } from "./EndRoundInfo"
import { TeamResults } from "./TeamResults"

export class EndRoundPage extends React.Component {
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
