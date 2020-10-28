import React from "react";
import * as ReactRedux from "react-redux";

import Button from "./shared/Button";
import { PageTitle } from "./shared/PageTitle";
import { isValid } from "../validation/validation";
import {
  joinRoom,
  editRoomidAction,
  editTeamNameAction,
  nextPageAction,
} from "../reducers/roomReducer";

class SignInUI extends React.Component {
  componentDidUpdate() {
    if (this.props.nextPage) {
      this.props.doNextPage(false);
      this.props.history.push("/wait");
    }
  }

  render() {
    let formError = "";
    let button = [];
    if (this.props.formError) {
      formError = "You must enter a valid team name and code";
      button.push(
        <span key="formError" style={{ color: "red" }}>
          {formError}
        </span>
      );
    } else if (
      this.props.tempTeamName !== null &&
      this.props.tempRoomid !== null
    ) {
      button.push(<Button key="submitButton" title="Join room" />);
    }

    const teamNameHandler = (evt) => {
      if (isValid(document.getElementById("teamNameInput"))) {
        this.props.doEditTeamName(evt.target.value);
        // if the enter key is pressed
        if (evt.keyCode === 13) {
          evt.preventDefault();
          return this.props.doJoinRoom(this.props.roomid);
        }
      } else {
        this.props.doEditTeamName(null);
      }
    };
    const roomidHandler = (evt) => {
      if (isValid(document.getElementById("roomInput"))) {
        this.props.doEditRoomid(evt.target.value);
        // if the enter key is pressed
        if (evt.keyCode === 13) {
          evt.preventDefault();
          if (
            this.props.tempTeamName !== null &&
            this.props.tempRoomid !== null &&
            isValid(document.getElementById("teamNameInput")) &&
            isValid(document.getElementById("roomInput"))
          )
            return this.props.doJoinRoom(this.props.roomid);
        }
      } else {
        this.props.doEditRoomid(null);
      }
    };
    const joinRoomHandler = () => {
      if (
        this.props.tempTeamName !== null &&
        this.props.tempRoomid !== null &&
        isValid(document.getElementById("teamNameInput")) &&
        isValid(document.getElementById("roomInput"))
      )
        this.props.doJoinRoom(this.props.roomid);
    };

    return (
      <React.Fragment>
        <PageTitle title="Sign in" />
        <div style={{ marginBottom: "1em" }}>
          <form id="signin-form" onKeyDown={roomidHandler}>
            <p>Team name</p>
            <input
              id="teamNameInput"
              required
              autoFocus
              placeholder="Example: Alpaca"
              type="text"
              minLength="1"
              pattern="[a-zA-Z]+"
              onChange={teamNameHandler}
            ></input>
            <p>Room code</p>
            <input
              id="roomInput"
              required
              placeholder="Example: 123456"
              minLength="7"
              maxLength="7"
              pattern="[0-9]+"
              type="text"
              onChange={roomidHandler}
            ></input>
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
    tempRoomid: state.room.tempRoomid,
    tempTeamName: state.room.tempTeamName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doNextPage: (status) => dispatch(nextPageAction(status)),
    doJoinRoom: (roomid) => dispatch(joinRoom(roomid)),
    doEditRoomid: (roomid) => dispatch(editRoomidAction(roomid)),
    doEditTeamName: (teamName) => dispatch(editTeamNameAction(teamName)),
  };
}

export const SignIn = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInUI);
