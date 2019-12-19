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
} from "../../actions/posts";
import { withRouter } from "react-router-dom";

class PostReadOnly extends React.Component {
  handleUpVote = () => {
    this.props.dispatch(handleUpVotePosts(this.props.post._id));
  };

  handleDownVote = () => {
    this.props.dispatch(handleDownVotePosts(this.props.post._id));
  };

  handleEdit = () => {
    console.log("EDIT");
    this.props.history.push(`/posts/edit/${this.props.post._id}`, {
      id: this.props.post._id,
      title: this.props.post.title,
      body: this.props.post.body,
    });
  };

  handleDelete = () => {
    this.props.dispatch(handleDeletePost(this.props.post._id));
    this.props.history.push("/");
  };


  render() {
    
    const postsFiltered = Object.values(this.props.posts)
    .map(p => ({ ...p }))
    .filter(post => post._id == this.props.passedPostId);
    
    const post = postsFiltered.length > 0 ?  postsFiltered[0] : {};

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
  console.log("state & props: ")
  console.log(JSON.stringify(state))
  console.log(JSON.stringify(props))
  const { posts } = state;
  const { passedPostId } = props;
  const formatDate = date => new Date(date).toUTCString();

  return {
    formatDate,
    passedPostId,
    posts
  };
}

export default connect(mapStateToProps)(withRouter(PostReadOnly));
