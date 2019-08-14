import React from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/posts";
import { generateUID } from "../utils/util";
class CreatePost extends React.Component {
  state = {
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

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    console.log(JSON.stringify(this.state)); // TODO remove
  };

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    const now = new Date().getTime();
    const uuid = generateUID();

    const post = {
      ...this.state,
      ...{
        id: uuid,
        timestamp: now,
      },
    };

    dispatch(createPost(post));

    this.setState({
      id: "",
      timestamp: "",
      title: "",
      body: "",
      author: "Damian",
      category: "",
      commentCount: 0,
      deleted: false,
      voteScore: 0,
    });
  };

  render() {
    const { categories } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="post-create-container">
          <div className="my-card">
            <div className="card-header">
              {/* start */}
              <div className="row create-form-row">
                <div className="mb-1">
                  <h5 className="create-post-title">Create a post</h5>
                </div>
              </div>
              <div className="row">
                {/* input */}

                <div class="input-group post-title-input">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Text input with dropdown button"
                    placeholder="Title..."
                    value={this.state.title}
                    name="title"
                    onChange={this.handleInputChange}
                  />
                  <div class="input-group-append">
                    <select
                      className="form-control"
                      value={this.state.category}
                      name="category"
                      onChange={this.handleInputChange}
                      defaultValue="none"
                    >
                      <option disabled value="none">
                        Select Category
                      </option>
                      {Object.values(categories).map((category, index) =>
                        <option key={index} value={category.name}>
                          {category.name.toUpperCase()}
                        </option>
                      )}
                    </select>
                  </div>
                </div>
                {/* input end */}
              </div>
              {/* end */}
            </div>
            <div className="card-body">
              <textarea
                class="custom-text-area form-control "
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
                  class="btn btn-info "
                  disabled={
                    this.state.title === "" ||
                    this.state.body === "" ||
                    this.state.category === ""
                  }
                >
                  POST
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  const { categories } = state;
  return { categories };
}

export default connect(mapStateToProps)(CreatePost);
