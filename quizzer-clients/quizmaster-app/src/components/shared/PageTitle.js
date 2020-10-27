import React from "react";

export class PageTitle extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </React.Fragment>
        );
    }
}
