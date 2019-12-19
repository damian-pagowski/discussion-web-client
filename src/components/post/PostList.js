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
  state = {
    posts: [],
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.posts &&
      nextProps.posts.toString() !== prevState.posts.toString()
    ) {
      console.log("getDerivedStateFromProps:: " + JSON.stringify(nextProps));
      return { posts: nextProps.posts };
    } else return null;
  }

  componentDidUpdate(nextProps, prevState) {
    if (prevState.path !== this.state.path) {
      if (
        nextProps.posts &&
        nextProps.posts.toString() !== prevState.posts.toString()
      ) {
        console.log("getDerivedStateFromProps:: " + JSON.stringify(nextProps));
        this.setState({ posts: Object.values(nextProps.posts) });
      }
    }
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
    console.log("posts - component state: " + JSON.stringify(this.state.posts));

    console.log("PROPS in render: " + JSON.stringify(Object.keys(this.props)));
    console.log("POSTS PROPS in render: " + JSON.stringify(this.props.posts));

    const posts = this.props.posts ?  Object.values(this.props.posts) :[];

    return posts.length > 0 ? (
      <div className="post-list-container">
        {posts.map(post => (
          <div key={post._id}>
            <Post passedPostId={post._id} />
          </div>
        ))}
      </div>
    ) : (
      <h5>Sorry, no posts in this category</h5>
    );
  }
}

function mapStateToProps(state) {
  console.log("state in props >> " + JSON.stringify(state));
  return { posts: state.posts };
}

export default connect(mapStateToProps)(PostList);
