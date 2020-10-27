import React from "react";
import * as ReactRedux from "react-redux";

import Button from "./shared/Button";
import { PageTitle } from "./shared/PageTitle";
import {
  joinRoom,
  editRoomidAction,
  editTeamNameAction,
  nextPageAction,
} from "../reducers/roomReducer";
import { isValid } from "../validation/validation"

class SignInUI extends React.Component {
  componentDidUpdate() {
    if (this.props.nextPage) {
      this.props.doNextPage(false);
      this.props.history.push("/wait");
    }
  }

  render() {
    const teamNameHandler = (evt) =>
      this.props.doEditTeamName(evt.target.value);
    const roomidHandler = (evt) => this.props.doEditRoomid(evt.target.value);
    const joinRoomHandler = () => {
      if (isValid(document.getElementById("signin-form"))) {
        this.props.doJoinRoom(this.props.roomid)
      }
    };

    return (
      <React.Fragment>
        <PageTitle title="Sign in" />
        <div style={{ marginBottom: "1em" }}>
          <form id="signin-form">
            <p>Team name</p>
            <input required type="text" minLength="1" pattern="[a-zA-Z]+" onChange={teamNameHandler}></input>
            <p>Room code</p>
            <input required type="number" onChange={roomidHandler}></input>
          </form>
        </div>
        <Button title="Join room" customClickEvent={joinRoomHandler} />
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
    doEditTeamName: (teamName) => dispatch(editTeamNameAction(teamName)),
  };
}

export const SignIn = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInUI);