import React from "react";
import * as ReactRedux from "react-redux";
import { withRouter } from "react-router-dom";

import spinner from "../assets/spinner.svg";

// REMOVE BEFORE COMMIT
import { getWebSocket } from '../ws'

export class WaitPageUI extends React.Component {
  render() {
    return (
      <div className="waitpage">
        <h1>Waiting for quiz master...</h1>
        <img src={spinner} height="300" width="300" alt="Spinner" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      stopLoading:      state.scoreboard.stopLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export const WaitPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(WaitPageUI));
