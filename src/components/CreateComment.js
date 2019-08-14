import React from "react";
import { connect } from "react-redux";
import { generateUID } from "../utils/util";

class CreateComment extends React.Component {
  state = {
    id: "",
    timestamp: "",
    body: "",
    author: "",
    parentId: "",
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

    const comment = {
      ...this.state,
      ...{
        id: uuid,
        timestamp: now,
      },
    };

    // dispatch action for create comment here
    console.log('====================================');
    console.log(JSON.stringify(this.state));
    console.log('====================================');
    this.setState({
      id: "",
      timestamp: "",
      body: "",
      author: "",
      parentId: "",
    });
    
  };

  render() {
      const author = "Damian";
    const comment = {
      id: "aaa123",
      timestamp: "1467166872634",
      body:
        "In rhoncus sit amet ex ac malesuada. Vestibulum at libero ac elit tristique consectetur quis eget nulla. In in elit eu nisi porta imperdiet. Vestibulum blandit dictum facilisis. Ut suscipit nunc ipsum, ornare lobortis mauris accumsan in. Quisque suscipit aliquam ipsum a faucibus. Morbi egestas in lorem sed laoreet. Aliquam lobortis volutpat ex id rutrum. Proin commodo a felis at porta.",
      author: "Damian",
      parentId: "6ni6ok3ym7mf1p33lnez",
    };
    return (
      <div className="card create-comment-card mt-1">
        <div className="card-body px-3 py-2">
          <div className="mb-2 pl-1">
            <small> Comment as <span className="my-badge">{author}</span></small>
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
            <button className="btn btn-sm btn-outline-secondary" type="button" onClick={this.handleSubmit}>
              Comment
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { categories } = state;
  return { categories };
}

export default connect(mapStateToProps)(CreateComment);
