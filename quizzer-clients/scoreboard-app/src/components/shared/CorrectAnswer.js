import React from "react";

export class CorrectAnswer extends React.Component {
    render() {
        return (
            <div className="clear">
                <div>
                    <h2>Correct Answer: {this.props.answer}</h2>
                </div>
            </div>
        );
    }
}
