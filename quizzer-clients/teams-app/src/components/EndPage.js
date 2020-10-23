import React from "react";
import * as ReactRedux from "react-redux";

import { PageTitle } from "./shared/PageTitle";
import Button from "./shared/Button";

import { clearRoom } from "../reducers/roomReducer";
import { clearRound } from "../reducers/roundReducer";

class EndPageUI extends React.Component {
  componentDidMount() {
    if (this.props.roomid === null) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <React.Fragment>
        <PageTitle
          title="Quiz ended"
          subtitle="The quizmaster has ended the quiz"
        />
        <h1>You got {this.props.points} points</h1>
        <p>Check out the scoreboard to see which place you got!</p>
        <Button
          title="Go back home"
          customClickEvent={() => {
            this.props.doClearRoom();
            this.props.doClearRound();
            this.props.history.push("/");
          }}
        />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    roomid: state.room.roomid,
    teamName: state.room.teamName,
    points: state.room.points,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doClearRoom: () => dispatch(clearRoom()),
    doClearRound: () => dispatch(clearRound()),
  };
}

export const EndPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(EndPageUI);
