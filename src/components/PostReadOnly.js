import React from "react";
import { connect } from "react-redux";
import { FaThumbsDown } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import {
  handleDownVotePosts,
  handleUpVotePosts,
  handleDeletePost,
} from "../actions/posts";
import { withRouter } from "react-router-dom";


class PostReadOnly extends React.Component {
  handleUpVote = () => {
    this.props.dispatch(handleUpVotePosts(this.props.post.id));
  };

  handleDownVote = () => {
    this.props.dispatch(handleDownVotePosts(this.props.post.id));
  };

  handleEdit = () => {
    console.log("EDIT");
    this.props.history.push(`/posts/edit/${this.props.post.id}`, {
      id: this.props.post.id,
      title: this.props.post.title,
      body: this.props.post.body,
    });    
  };

  handleDelete = () => {
    this.props.dispatch(handleDeletePost(this.props.post.id));
    this.props.history.push('/')
  };



  componentDidMount(){
    console.log("dupa", JSON.stringify(this.props));

  }
  render() {
    const post = this.props.post || {};
    return (
      <div className="post-container">
        <div className="card">
          <div className="card-header">
            <h4>
              {post.title}
            </h4>
            <blockquote className="small text-muted">
              Posted by {post.author} on {this.props.formatDate(post.timestamp)}
            </blockquote>
          </div>
          <div className="card-body">
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
  const postsFiltered = Object.values(posts)
    .map(p => ({ ...p }))
    .filter(post => post.id == passedPostId);

  console.log("====================================");
  console.log("POSTS  >> ", JSON.stringify(postsFiltered));
  console.log("====================================");

  console.log("====================================");
  console.log("PROPS >> ", JSON.stringify());
  console.log("====================================");

  const formatDate = date => new Date(date).toUTCString();
  return {
    post: postsFiltered[0],
    formatDate,
    passedPostId,
  };
}

export default connect(mapStateToProps)(withRouter(PostReadOnly));
