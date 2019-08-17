import React from "react";
import { connect } from "react-redux";
import { FaThumbsDown } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import {
  handleDeleteComment,
  handleUpVoteComment,
  handleDownVoteComment,
} from "../actions/comments";

class Comment extends React.Component {
  handleUpVote = () => {
    this.props.dispatch(handleUpVoteComment(this.props.commentId));
  };

  handleDownVote = () => {
    this.props.dispatch(handleDownVoteComment(this.props.commentId));
  };

  handleEdit = () => {
    console.log("EDIT");
  };

  handleDelete = () => {
    this.props.dispatch(handleDeleteComment(this.props.commentId));
  };

  render() {
    const comment = Object.values(this.props.comments).filter(
      comment => comment.id === this.props.commentId
    )[0];

    const dateFormatted = new Date(comment.timestamp).toUTCString();

    return (
      <div className="post-container mt-2">
        <div className="card">
          <div className="card-header">
            <small className="badge badge-pill badge-secondary">
              {comment.voteScore} Votes
            </small>

            <small className="text-muted">
              {" "}Commented by {comment.author || "Unknown"} on{" "}
            </small>

            <small className="text-muted">
              {dateFormatted}
            </small>
          </div>
          <div className="card-body">
            <p className="card-text">
              {comment.body}
            </p>
            <div className="custom-card-footer text-muted pull-to-right">
              <div className="my-badge">
                <span className="icon" onClick={this.handleEdit}>
                  <FaEdit />
                </span>
                <span className="icon" onClick={this.handleDelete}>
                  <FaTrash />
                </span>
              </div>

              <div className="my-badge">
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
      </div>
    );
  }
}
function mapStateToProps(state, props) {
  const { comments } = state;
  const { commentId } = props;

  console.log("====================================");
  // console.log("Comment >>", JSON.stringify(comment));
  console.log("====================================");
  return { commentId, comments };
}

export default connect(mapStateToProps)(Comment);
