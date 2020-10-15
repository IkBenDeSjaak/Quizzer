import React from "react";

import { TeamsAnswered } from "./TeamsAnswered";
import { RoundInfo } from "./RoundInfo"
import { Question } from "./Question"

export class QuestionPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <RoundInfo />
                <Question />
                <TeamsAnswered />
            </React.Fragment>
        );
    }
}
