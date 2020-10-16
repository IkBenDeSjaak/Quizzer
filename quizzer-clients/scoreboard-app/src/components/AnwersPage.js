import React from "react";

import { TeamAnswers } from "./shared/TeamAnswers";
import { RoundInfo } from "./shared/RoundInfo"
import { Question } from "./shared/Question"
import { CorrectAnswer } from "./shared/CorrectAnswer";

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
