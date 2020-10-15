import React from "react";
import * as ReactRedux from "react-redux";

import Button from './building-blocks/Button'

import { joinRoom } from "../reducers/scoreboardReducer";
// https://dev.to/projectescape/programmatic-navigation-in-react-3p1l
import { withRouter } from "react-router-dom";

export class SignInUI extends React.Component {
  componentDidUpdate() {
    if(this.props.hasJoined) {
      this.props.history.push("/wait");
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>Room code</h2>
        <input></input>
        <Button title="Join room" customClickEvent={this.props.doJoinRoom}></Button>
      </React.Fragment>
    );
  }
}


function mapStateToProps(state) {
  return {
    hasJoined:        state.scoreboard.hasJoined
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doJoinRoom: () => dispatch(joinRoom())
  };
}

export const SignIn = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignInUI));
