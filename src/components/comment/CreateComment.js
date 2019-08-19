import React from "react";
import { connect } from "react-redux";
import { generateUID } from "../../utils/util";
import {
  handleCreateComment,
  handleUpdateComment,
} from "../../actions/comments";
import { _getPostDetails, _getCommentDetails } from "../../utils/api";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

const emptyComment = {
  id: "",
  timestamp: "",
  body: "",
  author: "Damian",
  parentId: "",
  voteScore: 0,
};

class CreateComment extends React.Component {
  state = {
    ...emptyComment,
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    const now = new Date().getTime();
    const uuid = generateUID();

    if (this.state.parentId && this.state.id) {
      dispatch(
        handleUpdateComment(this.state.parentId, this.state.id, {
          timestamp: now,
          body: this.state.body,
        })
      );
    } else {
      const comment = {
        ...this.state,
        ...{
          id: uuid,
          timestamp: now,
          parentId: this.props.match.params.post_id,
        },
      };
      dispatch(handleCreateComment(comment));
    }

    this.setState({ ...emptyComment });
    this.props.history.push(
      `/posts/details/${this.props.match.params.post_id}`
    );
  };

  componentDidMount() {
    const commentId = this.props.match.params.comment_id;
    if (commentId) {
      _getCommentDetails(commentId).then(
        resp =>
          resp.hasOwnProperty("error")
            ? this.setState({ redirect: true })
            : this.setState({ ...resp })
      );
    }
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/error-404",
          }}
        />
      );
    }
    const author = "Damian";
    return (
      <div className="card create-comment-card mt-1">
        <div className="card-body px-3 py-2">
          <div className="mb-2 pl-1">
            <small>
              Comment as <span className="my-badge">{author}</span>
            </small>
          </div>
          <div className="input-group">
            <textarea
              className="form-control"
              aria-label="With textarea"
              rows="4"
              value={this.state.body}
              name="body"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="post-button-no-padding mt-2">
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={this.handleSubmit}
            >
              Comment
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const comments = state;
  return { comments };
}
export default connect(mapStateToProps)(withRouter(CreateComment));
