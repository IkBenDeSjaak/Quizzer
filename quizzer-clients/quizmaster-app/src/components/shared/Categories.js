import React from "react";
import { connect } from "react-redux";

import {
  selectCategoriesAction,
  removeCategoriesAction,
} from "../../reducers/roundReducer";

class CategoriesUI extends React.Component {
  render() {
    let noSelected = "";
    if (this.props.selectedCategories.length < 1) {
      noSelected = "No categories selected";
    }

    // check if category is in selectedCategories, if so remove it
    let removeSelected = this.props.categories.filter((element) => {
      return this.props.selectedCategories.indexOf(element) === -1;
    });

    const onSelectClick = (category) => this.props.doSelectCategories(category)
    const onRemoveClick = (category) => this.props.doRemoveCategories(category)

    return (
      <React.Fragment>
        <div className="container">
          {removeSelected.map((category) => (
            <div
              key={category}
              className="item category"
              onClick={() => onSelectClick(category) }
            >
              {category}
            </div>
          ))}
        </div>
        <h2>Categories {this.props.selectedCategories.length}/3</h2>
        <p>{noSelected}</p>
        <div className="container">
          {this.props.selectedCategories.map((category) => (
            <div
              key={category}
              className="item category"
              onClick={ () => { onRemoveClick(category) } }
            >
              {category}
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    selectedCategories: state.round.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doSelectCategories: (category) =>
      dispatch(selectCategoriesAction(category)),
    doRemoveCategories: (category) =>
      dispatch(removeCategoriesAction(category)),
  };
}

export const Categories = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesUI);
