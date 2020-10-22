import React from "react";
import * as ReactRedux from "react-redux";

import { Question } from "./Question";

import { questionChosen } from "../../reducers/roundReducer";

class QuestionsUI extends React.Component {
  render() {
    const ChooseQuestionClick = (category) => {
      for (let i = 0; i < this.props.tempQuestion.length; i++) {
        if (this.props.tempQuestion[i].category === category) {
          this.props.doQuestionChosen(this.props.tempQuestion[i]);
        }
      }
    };
    const questionAmount = 3;
    let question = [];
    for (let i = 0; i < questionAmount; i++) {
      question.push(
        <Question
          key={this.props.tempQuestion[i].question}
          question={this.props.tempQuestion[i].question}
          category={this.props.tempQuestion[i].category}
          onQuestionClick={(category) => () => {
            ChooseQuestionClick(category);
          }}
        />
      );
    }

    return <React.Fragment>{question}</React.Fragment>;
  }
}

function mapStateToProps(state) {
  return {
    tempQuestion: state.round.tempQuestion,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doQuestionChosen: (question) => dispatch(questionChosen(question)),
  };
}

export const Questions = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsUI);
