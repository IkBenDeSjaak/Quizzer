import React from "react";
import { connect } from "react-redux";

import { PageTitle } from "./shared/PageTitle";
import { Categories } from "./shared/Categories";
import Button from "./shared/Button";

import { fetchCategories } from "../reducers/categoryReducer";
import {
  selectCategoriesAction,
  removeCategoriesAction,
  sendCategoriesAction,
  nextPageAction,
} from "../reducers/roundReducer";

export class SelectCategoriesUI extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  componentDidUpdate() {
    if(this.props.nextPage) {
        this.props.doNextPage()
        this.props.history.push('/choose-question')
    }
  }

  render() {

    const onSelectCategory = (category) =>
      this.props.doSelectCategories(category);
    const onRemoveCategory = (category) =>
      this.props.doRemoveCategories(category);
    const onClickButton = () => this.props.doSendCategories();

    let button = "";
    if (this.props.selectedCategories.length === 3) {
      button = <Button title="Start round" customClickEvent={onClickButton}/>;
    }

    return (
      <React.Fragment>
        <PageTitle
          title="Select categories"
          subtitle="Select 3 categories from which you want to get questions"
        />
        <Categories
          categories={this.props.categories}
          selectedCategories={this.props.selectedCategories}
          selectCategoryClick={(category) => () => {
            onSelectCategory(category);
          }}
          removeCategoryClick={(category) => () => {
            onRemoveCategory(category);
          }}
        />
        {button}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    selectedCategories: state.round.categories,
    nextPage: state.round.nextPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    doSelectCategories: (category) =>
      dispatch(selectCategoriesAction(category)),
    doRemoveCategories: (category) =>
      dispatch(removeCategoriesAction(category)),
    doSendCategories: () => dispatch(sendCategoriesAction()),
    doNextPage: () => dispatch(nextPageAction())
  };
}

export const SelectCategories = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectCategoriesUI);
