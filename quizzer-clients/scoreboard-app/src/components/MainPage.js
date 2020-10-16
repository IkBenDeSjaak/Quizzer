import React from "react";

import { PageTitle } from "./shared/PageTitle";
import { SignIn } from "./SignIn"

export class MainPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <PageTitle title="Sign in" subtitle="Enter a room code to follow the progress of a quiz"></PageTitle>
                <SignIn></SignIn>
            </React.Fragment>
        );
    }
}
