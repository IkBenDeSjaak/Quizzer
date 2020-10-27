import React from "react";
import * as ReactRedux from "react-redux";
import { withRouter } from "react-router-dom";

import Button from "./shared/Button";
import {
  joinRoom,
  editRoomidAction,
  nextPageAction,
} from "../reducers/roomReducer";
import { isValid } from "../validation/validation"

export class SignInUI extends React.Component {
  componentDidUpdate() {
    if (this.props.nextPage) {
      this.props.doNextPage(false);
      this.props.history.push("/wait");
    }
  }

  render() {
    const roomidHandler = (evt) => this.props.doEditRoomid(evt.target.value);
    const joinRoomHandler = () => {
      if (isValid(document.getElementById("signin-form"))) {
        this.props.doJoinRoom(this.props.roomid)
      }
    };

    return (
      <React.Fragment>
        <h2>Room code</h2>
        <div style={{ marginBottom: "1em" }}>
          <form id="signin-form">
            <input required type="number" onChange={roomidHandler}></input>
          </form>
        </div>
        <Button title="Join room" customClickEvent={joinRoomHandler}></Button>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    nextPage: state.room.nextPage,
    roomid: state.room.roomid,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doNextPage: (status) => dispatch(nextPageAction(status)),
    doJoinRoom: (roomid) => dispatch(joinRoom(roomid)),
    doEditRoomid: (roomid) => dispatch(editRoomidAction(roomid)),
  };
}

export const SignIn = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignInUI));
