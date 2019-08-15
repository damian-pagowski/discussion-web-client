import React from "react";
import { connect } from "react-redux";
import { FaThumbsDown } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { upVotePost, downVotePost } from "../actions/posts";

class Post extends React.Component {
  handleUpVote = () => {
    this.props.dispatch(upVotePost(this.props.post.id));
  };

  handleDownVote = () => {
    this.props.dispatch(downVotePost(this.props.post.id));
  };

  handleEdit = () => {
    console.log("EDIT");
  };

  handleDelete = () => {
    console.log("DELETE");
  };

  render() {
    const { passedPostId, posts } = this.props;
    const post = this.props.post;
    console.log("====================================");
    console.log(JSON.stringify(posts));
    console.log("====================================");
    const dateFormatted = new Date(post.timestamp).toUTCString();
    return (
      <div className="post-container">
        <div className="card">
          <div className="card-header">
            <span className="category-name">{post.category}</span>
            Posted by
            <span className="author-name">{post.author}</span>
            on
            <span className="date-posted">{dateFormatted}</span>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              {post.title}
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
  const post = posts[passedPostId];
  const postID = post.id;
  return { posts, post, postID };
}

export default connect(mapStateToProps)(Post);
