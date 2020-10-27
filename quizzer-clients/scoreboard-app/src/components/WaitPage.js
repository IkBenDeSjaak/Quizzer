import React from "react";
import * as ReactRedux from "react-redux";
import { withRouter } from "react-router-dom";

import spinner from "../assets/spinner.svg";

import { nextPageAction } from "../reducers/roomReducer";

class WaitPageUI extends React.Component {
  componentDidMount() {
    if (this.props.roomid === null) {
      this.props.history.push("/");
    }
  }

  componentDidUpdate() {
    if (this.props.nextPage) {
      this.props.doNextPage(false);
      this.props.history.push("/question");
    }
  }

  render() {
    return (
      <div className="waitpage">
        <h1>Waiting for quiz master...</h1>
        <img src={spinner} height="300" width="300" alt="Spinner" />
        <br></br>
      </div>
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
  };
}

export const WaitPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(WaitPageUI));
