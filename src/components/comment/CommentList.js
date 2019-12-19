import React from "react";
import Comment from "./Comment";
import { connect } from "react-redux";

class CommentList extends React.Component {
  render() {
    const { comments } = this.props;
    return (
      <div className="post-list-container">
        {comments &&
          comments.length > 0 &&
          comments.map((comment, index) => (
            <div key={index}>
              <Comment commentId={comment._id} />
            </div>
          ))}
      </div>
    );
  }
}

function mapStateToProps({ comments }) {
  return { comments: Object.values(comments) };
}

export default connect(mapStateToProps)(CommentList);
