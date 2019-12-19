import React from "react";
import { Link } from "react-router-dom";
import Category from "./category/Category";
import { connect } from "react-redux";
import { handleReceivePosts } from "../actions/posts";
import { handleReceiveCategories } from "../actions/categories";

class Sidebar extends React.Component {
  displayAllPosts = () => {
    this.props.dispatch(handleReceivePosts());
  };

  componentDidMount = () => {
    this.props.dispatch(handleReceiveCategories());
  };

  render() {
    const { categories } = this.props;

    return (
      <div id="mySidenav" class="sidenav">
        <a
          href="javascript:void(0)"
          class="closebtn"
          onClick={this.props.toggleSidebar}
        >
          &times;
        </a>
        <p>Categories</p>
        <ul className="list-group list-group-flush">
          {Object.keys(categories).map(index => (
            <li key={index} className="list-group-item">
              <Category categoryIndex={index} />
            </li>
          ))}
          <li className="list-group-item">
            <div className="category-list-item" onClick={this.displayAllPosts}>
              All Posts
            </div>
          </li>
        </ul>
        {/* <button type="button" class="btn btn-outline-light">Create Post</button> */}
        <Link to="/posts/new" className="btn btn-outline-light" id="create-post-sidebar">
          <span>Create Post</span>
        </Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { categories } = state;
  return { categories };
}

export default connect(mapStateToProps)(Sidebar);
