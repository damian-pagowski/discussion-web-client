import React from "react";
import { connect } from "react-redux";
import { handleCreatePost, handleUpdatePost } from "../../actions/posts";
import { generateUID } from "../../utils/util";
import { withRouter } from "react-router-dom";
import { _getPostDetails } from "../../utils/api";
import { Redirect } from "react-router-dom";

const emptyPost = {
  id: "",
  timestamp: "",
  title: "",
  body: "",
  author: "Damian",
  category: "",
  commentCount: 0,
  deleted: false,
  voteScore: 0,
};

class CreatePost extends React.Component {
  state = { ...emptyPost };

  handleInputChange = event => {
    event.preventDefault();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, postID } = this.props;
    const now = new Date().getTime();
    const uuid = generateUID();

    if (postID) {
      const postUpdate = {
        body: this.state.body,
        title: this.state.title,
      };
      dispatch(handleUpdatePost(postID, postUpdate)).then(() => {
        console.log("POST ID : " + postID)
        this.props.history.push(`/posts/details/${postID}`)
      }
      );
    } else {
      const newPost = {
        ...this.state,
        ...{
          id: uuid,
          timestamp: now,
        },
      };
      dispatch(handleCreatePost(newPost));
      this.props.history.push("/");
    }
  };

  componentDidMount = () => {
    const id = this.props.match.params.post_id;
    if (id) {
      _getPostDetails(id).then(
        resp =>
          resp.hasOwnProperty("error")
            ? this.setState({ redirect: true })
            : this.setState({ ...resp })
      );
    }
  };

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
    const { categories } = this.props;
    return (
      <div className="post-create-container">
        <div className="my-card">
          <div className="card-header">
            {/* start */}
            <div className="row create-form-row">
              <div className="mb-1">
                <h5 className="create-post-title">
                  {this.props.location.state
                    ? "Edit Post Details"
                    : "Create a post"}
                </h5>
              </div>
            </div>
            <div className="row">
              {/* input */}

              <div className="input-group post-title-input">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with dropdown button"
                  placeholder={"Title..."}
                  value={this.state.title}
                  name="title"
                  onChange={this.handleInputChange}
                />
                <div className="input-group-append">
                  {!this.props.location.state &&
                    <select
                      className="form-control"
                      value={this.state.category}
                      name="category"
                      onChange={this.handleInputChange}
                      defaultValue=""
                    >
                      <option value="" selected>
                        Select Category
                      </option>
                      {Object.values(categories).map((category, index) =>
                        <option key={index} value={category._id}>
                          {category.name.toUpperCase()}
                        </option>
                      )}
                    </select>}
                </div>
              </div>
              {/* input end */}
            </div>
            {/* end */}
          </div>
          <div className="card-body">
            <textarea
              className="custom-text-area form-control "
              id="exampleFormControlTextarea1"
              placeholder="Post..."
              value={this.state.body}
              name="body"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="custom-card-footer">
            <div className="post-button">
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="btn btn-info "
                disabled={
                  this.props.location.state
                    ? false
                    : this.state.title === "" ||
                      this.state.body === "" ||
                      this.state.category === ""
                }
              >
                {this.props.location.state ? "UPDATE" : "POST"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const { categories, posts } = state;
  const postID = props.match.params.post_id || props.location.state;
  return { categories, posts, postID };
}

export default connect(mapStateToProps)(withRouter(CreatePost));
