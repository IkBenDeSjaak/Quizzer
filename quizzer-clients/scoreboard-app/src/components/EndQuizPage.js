import React from "react";
import * as ReactRedux from "react-redux";

import { PageTitle } from "./shared/PageTitle";
import { EndResults } from "./shared/EndResults";

class EndQuizPageUI extends React.Component {
  componentDidMount() {
    if (this.props.roomid === null) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <React.Fragment>
        <PageTitle title="End of the quiz" />
        <EndResults />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    roomid: state.room.roomid,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export const EndQuizPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(EndQuizPageUI);
