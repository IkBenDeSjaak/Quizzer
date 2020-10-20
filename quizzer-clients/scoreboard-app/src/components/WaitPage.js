import React from "react";
import * as ReactRedux from "react-redux";
import { withRouter } from "react-router-dom";

import spinner from "../assets/spinner.svg";

import { stopLoadingAction } from "../reducers/roomReducer";

class WaitPageUI extends React.Component {
  componentDidMount() {
    if (this.props.roomid === null) {
      this.props.history.push("/");
    }
  }

  componentDidUpdate() {
    if (this.props.stopLoading) {
      this.props.doStopLoading();
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
    stopLoading: state.room.stopLoading,
    roomid: state.room.roomid,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doStopLoading: () => dispatch(stopLoadingAction()),
  };
}

export const WaitPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(WaitPageUI));
