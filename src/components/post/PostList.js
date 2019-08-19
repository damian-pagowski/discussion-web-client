import React from "react";
import Post from "./Post";
import { connect } from "react-redux";
import {
  handleReceivePostsByCategory,
  handleReceivePosts,
} from "../../actions/posts";
import { _getCategories } from "../../utils/api";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.props.history.listen((location, action) => {
      console.log("on category change", location);
      this.props.dispatch(
        handleReceivePostsByCategory(location.pathname.substring(1))
      );
    });
  }

  componentDidMount = () => {
    let category = this.props.match.params.category;
    if (category) {
      this.props.dispatch(handleReceivePostsByCategory(category));
    } else {
      this.props.dispatch(handleReceivePosts());
    }
  };

  render() {
    const { posts } = this.props;

    return Object.entries(posts).length > 0
      ? <div className="post-list-container">
          {Object.values(posts).map((post, index) =>
            <div key={index}>
              <Post passedPostId={post.id} />
            </div>
          )}
        </div>
      : <h5>Sorry, no posts in this category</h5>;
  }
}

function mapStateToProps(state) {
  const { posts } = state;
  return { posts };
}

export default connect(mapStateToProps)(PostList);
