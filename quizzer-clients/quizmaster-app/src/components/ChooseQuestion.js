import React from "react";
import * as ReactRedux from "react-redux";

import { PageTitle } from "./shared/PageTitle";
import { Question } from "./shared/Question";
import Button from "./shared/Button";

import {
  fetchRandomQuestion,
  questionChosen,
  nextPageAction,
  clearTempQuestions,
} from "../reducers/roundReducer";

class ChooseQuestionUI extends React.Component {
  componentDidMount() {
    this.fetchQuestion = () => {
      this.props.doFetchRandomQuestion(this.props.categories[0]);
      this.props.doFetchRandomQuestion(this.props.categories[1]);
      this.props.doFetchRandomQuestion(this.props.categories[2]);
      this.props.doClearTempQuestions();
    };
    this.fetchQuestion();
  }

  componentDidUpdate() {
    if (this.props.nextPage) {
      this.props.doNextPage(false)
      this.props.doClearTempQuestions();
      this.props.history.push("/answers");
    }
  }

  render() {
    const ChooseQuestionClick = (category) => {
      for (let i = 0; i < this.props.tempQuestion.length; i++) {
        if (this.props.tempQuestion[i].category === category) {
          this.props.doQuestionChosen(this.props.tempQuestion[i]);
        }
      }
    };
    if (this.props.tempQuestion.length > 2) {
      return (
        <React.Fragment>
          <PageTitle
            title="Choose a question"
            subtitle="Select a question from one of the chosen categories"
          ></PageTitle>
          <Question
            question={this.props.tempQuestion[0].question}
            category={this.props.tempQuestion[0].category}
            onQuestionClick={(category) => () => {
              ChooseQuestionClick(category);
            }}
          ></Question>
          <Question
            question={this.props.tempQuestion[1].question}
            category={this.props.tempQuestion[1].category}
            onQuestionClick={(category) => () => {
              ChooseQuestionClick(category);
            }}
          ></Question>
          <Question
            question={this.props.tempQuestion[2].question}
            category={this.props.tempQuestion[2].category}
            onQuestionClick={(category) => () => {
              ChooseQuestionClick(category);
            }}
          ></Question>
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
  }
}

function mapStateToProps(state) {
  return {
    categories: state.round.categories,
    tempQuestion: state.round.tempQuestion,
    nextPage: state.round.nextPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doFetchRandomQuestion: (category) =>
      dispatch(fetchRandomQuestion(category)),
    doQuestionChosen: (question) => dispatch(questionChosen(question)),
    doNextPage: (status) => dispatch(nextPageAction(status)),
    doClearTempQuestions: () => dispatch(clearTempQuestions()),
  };
}

export const ChooseQuestion = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseQuestionUI);
