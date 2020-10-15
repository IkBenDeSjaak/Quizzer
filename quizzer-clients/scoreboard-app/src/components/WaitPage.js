import React from "react";

import spinner from '../spinner.jpg'

export class WaitPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Wait for quiz master...</h1>
                <img src={spinner} height="300" width="300" alt="Spinner" />
            </React.Fragment>
        );
    }
}
