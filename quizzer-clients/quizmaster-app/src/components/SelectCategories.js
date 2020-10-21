import React from "react";
import { connect } from "react-redux";

import { PageTitle } from "./shared/PageTitle";
import { Categories } from "./shared/Categories";
import Button from "./shared/Button";

import { fetchCategories } from "../reducers/categoryReducer";
import { sendCategoriesAction, nextPageAction } from "../reducers/roundReducer";

class SelectCategoriesUI extends React.Component {
  componentDidMount() {
    if (this.props.roomid === null) {
      this.props.history.push("/");
    }
    this.props.fetchCategories();
  }

  componentDidUpdate() {
    if (this.props.nextPage) {
      this.props.doNextPage(false);
      this.props.history.push("/choose-question");
    }
  }

  render() {
    const onClickButton = () => this.props.doSendCategories();

    let button = "";
    if (this.props.selectedCategories.length === 3) {
      button = <Button title="Start round" customClickEvent={onClickButton} />;
    }

    return (
      <React.Fragment>
        <PageTitle
          title="Select categories"
          subtitle="Select 3 categories from which you want to get questions"
        />
        <Categories />
        {button}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    roomid: state.room.roomid,
    categories: state.categories,
    selectedCategories: state.round.categories,
    nextPage: state.round.nextPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    doSendCategories: () => dispatch(sendCategoriesAction()),
    doNextPage: (status) => dispatch(nextPageAction(status)),
  };
}

export const SelectCategories = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectCategoriesUI);
