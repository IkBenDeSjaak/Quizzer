import React from "react";
import * as ReactRedux from "react-redux";

import { PageTitle } from "./shared/PageTitle";
import { Questions } from "./shared/Questions";
import Button from "./shared/Button";

import {
  fetchRandomQuestion,
  nextPageAction,
  clearTempQuestions,
} from "../reducers/roundReducer";

class ChooseQuestionUI extends React.Component {
  componentDidMount() {
    if (this.props.roomid === null) {
      this.props.history.push("/");
    }
    this.fetchQuestion = () => {
      if (this.props.roomid !== null) {
        this.props.doFetchRandomQuestion(this.props.categories[0]);
        this.props.doFetchRandomQuestion(this.props.categories[1]);
        this.props.doFetchRandomQuestion(this.props.categories[2]);
        this.props.doClearTempQuestions();
      }
    };
    this.fetchQuestion();
  }

  componentDidUpdate() {
    if (this.props.nextPage) {
      this.props.doNextPage(false);
      this.props.doClearTempQuestions();
      this.props.history.push("/answers");
    }
  }

  render() {
    if (this.props.tempQuestion !== undefined) {
      if (this.props.tempQuestion.length > 2) {
        return (
          <React.Fragment>
            <PageTitle
              title="Choose a question"
              subtitle="Select a question from one of the chosen categories"
            ></PageTitle>
            <Questions />
            {/* button to change questions */}
            <Button
              title="Different questions"
              customClickEvent={() => {
                this.fetchQuestion();
              }}
            />
          </React.Fragment>
        );
      } else {
        return <h1>Loading...</h1>;
      }
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

function mapStateToProps(state) {
  return {
    roomid: state.room.roomid,
    categories: state.round.categories,
    nextPage: state.round.nextPage,
    tempQuestion: state.round.tempQuestion,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doFetchRandomQuestion: (category) =>
      dispatch(fetchRandomQuestion(category)),
    doNextPage: (status) => dispatch(nextPageAction(status)),
    doClearTempQuestions: () => dispatch(clearTempQuestions()),
  };
}

export const ChooseQuestion = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseQuestionUI);
