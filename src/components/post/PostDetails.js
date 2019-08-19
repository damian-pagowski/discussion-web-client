import React from "react";
import { connect } from "react-redux";
import CreateComment from "../comment/CreateComment";
import PostReadOnly from "./PostReadOnly";
import CommentList from "../comment/CommentList";
import { Redirect } from "react-router-dom";
import { handleReceiveComments } from "../../actions/comments";
import { _getPostDetails } from "../../utils/api";

class PostDetails extends React.Component {
  state = { redirect: false };

  componentDidMount = () => {
    this.props.dispatch(handleReceiveComments(this.props.id));
    const id = this.props.id || this.props.match.params.post_id;
    _getPostDetails(id).then(r =>
      this.setState({ redirect: r.hasOwnProperty("error") })
    );
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
    } else {
      return (
        <div className="d-flex flex-column">
          <PostReadOnly passedPostId={this.props.id} />
          <CreateComment passedPostId={this.props.id} />
          <CommentList passedPostId={this.props.id} />
        </div>
      );
    }
  }
}

function mapStateToProps(state, props) {
  const id = props.match.params.post_id;
  const { categories, posts } = state;
  return { categories, posts, id };
}

export default connect(mapStateToProps)(PostDetails);
