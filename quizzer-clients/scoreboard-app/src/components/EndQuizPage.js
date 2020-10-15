import React from "react";
import { NavLink } from "react-router-dom";

import { PageTitle } from "./PageTitle"
import { EndResults } from "./EndResults"

export class EndQuizPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <PageTitle title="End of the quiz" />
                <EndResults />
                <NavLink to="/">Return to homepage</NavLink>
            </React.Fragment>
        );
    }
}
