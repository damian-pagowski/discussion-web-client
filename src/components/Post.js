import React from "react";
import { connect } from "react-redux";
import { FaThumbsDown } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import {
  handleDownVotePosts,
  handleUpVotePosts,
  handleDeletePost,
} from "../actions/posts";

class Post extends React.Component {
  handleUpVote = () => {
    this.props.dispatch(handleUpVotePosts(this.props.post.id));
  };

  handleDownVote = () => {
    this.props.dispatch(handleDownVotePosts(this.props.post.id));
  };

  handleEdit = () => {
    console.log("EDIT POST CLICKED. PAssing props...")
    this.props.history.push(`/posts/edit/${this.props.post.id}`, {
      id: this.props.post.id,
      title: this.props.post.title,
      body: this.props.post.body,
      category: this.props.post.category,
      
    });
  };

  handleDelete = () => {
    this.props.dispatch(handleDeletePost(this.props.post.id));
  };

  render() {
    const post = this.props.post;
    console.log("====================================");
    console.log(JSON.stringify(post));
    console.log("====================================");
    return (
      <div className="post-container">
        <div className="card">
          <div className="card-header">
            <span className="category-name">{post.category}</span>
            Posted by
            <span className="author-name">{post.author}</span>
            on
            <span className="date-posted">
              {this.props.formatDate(post.timestamp)}
            </span>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <Link
                to={{
                  pathname: `/posts/details/${this.props.post.id}`,
                }}
              >
                {post.title}
              </Link>
            </h5>
            <p className="card-text">
              {post.body}
            </p>
            <div className="custom-card-footer text-muted">
              <span className="my-badge">
                {post.commentCount} Comments
              </span>
              <span className="icon" onClick={this.handleEdit}>
                <FaEdit />
              </span>
              <span className="icon" onClick={this.handleDelete}>
                <FaTrash />
              </span>
              <span className="my-badge">
                {post.voteScore} Scores
              </span>
              <span className="icon" onClick={this.handleDownVote}>
                <FaThumbsDown />
              </span>
              <span className="icon" onClick={this.handleUpVote}>
                <FaThumbsUp />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, props) {
  const { posts } = state;
  const { passedPostId } = props;
  console.log("====================================");
  console.log("Passed Post Id >> ", passedPostId);
  console.log("====================================");
  const post = Object.values(posts).filter(post => post.id == passedPostId)[0];
  console.log("====================================");
  console.log("Post Body >> ", post);
  console.log("====================================");
  const formatDate = date => new Date(date).toUTCString();
  return {
    post,
    formatDate,
  };
}

export default connect(mapStateToProps)(withRouter(Post));
