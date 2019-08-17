import React from "react";
import Category from "./Category";
import { connect } from "react-redux";
import { handleReceivePosts } from "../actions/posts";

class CategoryList extends React.Component {
  displayAllPosts = () => {
    this.props.dispatch(handleReceivePosts());
  };
  render() {
    const { categories } = this.props;

    return (
      <div className="card-list-container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Categories</h5>
          </div>
          <ul className="list-group list-group-flush">
            {Object.keys(categories).map(index =>
              <li key={index} className="list-group-item">
                <Category categoryIndex={index} />
              </li>
            )}
            <li className="list-group-item">
              <div
                className="category-list-item"
                onClick={this.displayAllPosts}
              >
                All Posts
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { categories } = state;
  console.log("====================================");
  console.log("CATEGORIES");
  console.log(JSON.stringify(categories));
  console.log("====================================");
  return { categories };
}

export default connect(mapStateToProps)(CategoryList);
