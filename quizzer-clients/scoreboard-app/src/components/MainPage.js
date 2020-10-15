import React from "react";

import { PageTitle } from "./PageTitle";
import { SignIn } from "./SignIn"

export class MainPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <PageTitle></PageTitle>
                <SignIn></SignIn>
            </React.Fragment>
        );
    }
}
