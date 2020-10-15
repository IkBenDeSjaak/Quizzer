import React from "react";

import { TeamAnswers } from "./TeamAnswers";
import { RoundInfo } from "./RoundInfo"
import { Question } from "./Question"
import { CorrectAnswer } from "./CorrectAnswer";

export class AnswersPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <RoundInfo />
                <Question />
                <CorrectAnswer />
                <TeamAnswers />
            </React.Fragment>
        );
    }
}
