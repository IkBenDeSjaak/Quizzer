import React from "react";

export class Categories extends React.Component {
  render() {
    let noSelected = "";
    if (this.props.selectedCategories.length < 1) {
      noSelected = "No categories selected";
    }

    // check if category is in selectedCategories, if so remove it
    let removeSelected = this.props.categories.filter((element) => {
        return this.props.selectedCategories.indexOf(element) === -1;
    });

    return (
      <React.Fragment>
        <div className="container">
          {removeSelected.map((category) => (
            <div
              key={category}
              className="item category"
              onClick={this.props.selectCategoryClick(category)}
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
              onClick={this.props.removeCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
