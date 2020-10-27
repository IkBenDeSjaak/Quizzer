import React from "react";
import * as ReactRedux from "react-redux";

import Button from "./shared/Button";
import { PageTitle } from "./shared/PageTitle";
import { EndResults } from "./shared/EndResults";

import { clearRoom } from "../reducers/roomReducer";
import { clearPoints } from "../reducers/pointsReducer";
import { clearRound } from "../reducers/roundReducer"

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
        <Button
          title="Go back home"
          customClickEvent={() => {
            this.props.doClearPoints();
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doClearRoom: () => dispatch(clearRoom()),
    doClearRound: () => dispatch(clearRound()),
    doClearPoints: () => dispatch(clearPoints()),
  };
}

export const EndQuizPage = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(EndQuizPageUI);
