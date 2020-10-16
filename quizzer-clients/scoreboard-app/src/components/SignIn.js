import React from "react";
import * as ReactRedux from "react-redux";
import { withRouter } from "react-router-dom";

import Button from './shared/Button'
import { joinRoom, editRoomidAction } from "../reducers/scoreboardReducer";

export class SignInUI extends React.Component {
  componentDidUpdate() {
    if(this.props.hasJoined) {
      this.props.history.push("/wait");
    }
  }

  render() {
    const roomidHandler = evt => this.props.doEditRoomid(evt.target.value)
    const joinRoomHandler = roomid => this.props.doJoinRoom(this.props.roomid)

    return (
      <React.Fragment>
        <h2>Room code</h2>
        <input onChange={roomidHandler}></input>
        <Button title="Join room" customClickEvent={joinRoomHandler}></Button>
      </React.Fragment>
    );
  }
}


function mapStateToProps(state) {
  return {
    hasJoined:        state.scoreboard.hasJoined,
    roomid:           state.scoreboard.roomid
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doJoinRoom:   (roomid) =>   dispatch(joinRoom(roomid)),
    doEditRoomid: (roomid) =>   dispatch(editRoomidAction(roomid))
  };
}

export const SignIn = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignInUI));
