import React from "react";
import { connect } from "react-redux";
import { handleReceivePostsByCategory } from "../../actions/posts";

class Category extends React.Component {
  handleFilterByCategory = category => {
    this.props.dispatch(handleReceivePostsByCategory(category));
  };

  render() {
    const { categoryIndex, categories } = this.props;
    const category = categories[categoryIndex];
    return (
      <div className="category-list-item" onClick={() => this.handleFilterByCategory(category.path)}>
        {category.name}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { categories } = state;
  return { categories };
}

export default connect(mapStateToProps)(Category);
