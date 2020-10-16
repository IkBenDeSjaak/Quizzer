import React from "react";
import * as ReactRedux from "react-redux";
import { withRouter } from "react-router-dom";

import spinner from "../assets/spinner.svg";

import { stopLoadingAction } from '../reducers/scoreboardReducer'


import { sendMessage } from '../ws'

export class WaitPageUI extends React.Component {
  componentDidUpdate() {
    if(this.props.stopLoading) {
      this.props.doStopLoading()
      this.props.history.push("/question");
    }
  }

  render() {
    const roomid = this.props.roomid
    const onQuestion = () => sendMessage("NEW_QUESTION",roomid,null)

    return (
      <div className="waitpage">
        <h1>Waiting for quiz master...</h1>
        <img src={spinner} height="300" width="300" alt="Spinner" />

        <button onClick={onQuestion}>New question</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stopLoading:  state.scoreboard.stopLoading,
    roomid:       state.scoreboard.roomid
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doStopLoading:  () =>       dispatch(stopLoadingAction())
  };
}

export const WaitPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(WaitPageUI));
