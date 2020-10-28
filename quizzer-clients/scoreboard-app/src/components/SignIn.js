import React from "react";
import * as ReactRedux from "react-redux";
import { withRouter } from "react-router-dom";

import Button from "./shared/Button";
import {
  joinRoom,
  editRoomidAction,
  nextPageAction,
} from "../reducers/roomReducer";
import { isValid } from "../validation/validation";

export class SignInUI extends React.Component {
  componentDidUpdate() {
    if (this.props.nextPage) {
      this.props.doNextPage(false);
      this.props.history.push("/wait");
    }
  }

  render() {
    const roomidHandler = (evt) => {
      this.props.doEditRoomid(evt.target.value);
    };

    const keyDownEvent = (evt) => {
      if (evt.keyCode === 13) {
        evt.preventDefault();
        joinRoomHandler();
      }
    }

    const joinRoomHandler = () => {
      if (isValid(document.getElementById("signin-form"))) {
        this.props.doJoinRoom(this.props.roomid)
      }
    };

    let formError = "";
    let button = [];
    if (this.props.formError) {
      formError = "You must enter a valid room code";
      button.push(
        <span key="formError" style={{ color: "red" }}>
          {formError}
        </span>
      );
    } else {
      button.push(<Button key="submitButton" title="Join room" />);
    }

    return (
      <React.Fragment>
        <h2>Room code</h2>
        <div style={{ marginBottom: "1em" }}>
          <form id="signin-form" onKeyDown={keyDownEvent}>
            <input
              id="roomInput"
              required
              placeholder="Example: 123456"
              minLength="7"
              maxLength="7"
              pattern="[0-9]+"
              type="text"
              onChange={roomidHandler}
            />
          </form>
        </div>
        <span onClick={joinRoomHandler}>{button}</span>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    nextPage: state.room.nextPage,
    roomid: state.room.roomid,
    formError: state.room.formError,
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
