import React from "react";
import { connect } from "react-redux";
import { generateUID } from "../utils/util";
import { handleCreateComment } from "../actions/comments";
import { withRouter } from "react-router-dom";

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
    const { dispatch, passedPostId } = this.props;
    const now = new Date().getTime();
    const uuid = generateUID();

    const comment = {
      ...this.state,
      ...{
        id: uuid,
        timestamp: now,
        parentId: passedPostId,
      },
    };

    dispatch(handleCreateComment(comment));
    console.log("====================================");
    console.log("PROPS>", JSON.stringify(this.props));
    console.log("passedPostId>", passedPostId);

    console.log("====================================");
    this.setState({ ...emptyComment });
    this.props.history.push(`/posts/details/${passedPostId}`);
  };

  render() {
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

function mapStateToProps({}, props) {
  const { passedPostId } = props;
  return { passedPostId };
}
export default connect(mapStateToProps)(withRouter(CreateComment));
