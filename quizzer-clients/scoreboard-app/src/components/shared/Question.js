import React from "react";
import * as ReactRedux from "react-redux";

import { fetchQuestion } from "../../reducers/roundReducer";

class QuestionUI extends React.Component {
  render() {
    return (
      <div className="clear">
        <h1>{this.props.question}</h1>
        <h2>Category: {this.props.category}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    question: state.round.question,
    category: state.round.category,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doFetchQuestion: (questionid) => dispatch(fetchQuestion(questionid)),
  };
}

export const Question = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionUI);
