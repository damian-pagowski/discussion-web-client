import React from 'react'
import { connect } from 'react-redux'

class Post extends React.Component {


  render () {

    console.log("?? PROPS IN POST ?? " , JSON.stringify(this.props))

    const {passedPostId, posts} = this.props;

    // const post = {
    //   id: '8xf0y6ziyjabvozdd253nd',
    //   timestamp: 1467166872634,
    //   title: 'Udacity is the best place to learn React',
    //   body: 'Everyone says so after all.',
    //   author: 'thingtwo',
    //   category: 'react',
    //   voteScore: 6,
    //   deleted: false,
    //   commentCount: 2
    // }
    const post = posts[passedPostId];
    return (
      <div className='post-container'>
        <div className='card'>
          <div className='card-header'>
            <span className="badge badge-info add-space">{post.category}</span> 
            Posted by
            <span>{post.author}</span>
            on
            <span>{post.timestamp}</span>
          </div>
          <div className='card-body'>
            <h5 className='card-title'>
              {post.title}
            </h5>
            <p className='card-text'>
              {post.body}
            </p>
            <div className='custom-card-footer text-muted'>
              <span className="badge badge-info add-space">{post.commentCount} Comments</span>
              <span className="badge badge-info add-space">{post.voteScore} Scores</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
  const { posts } = state
  return { posts }
}

export default connect(mapStateToProps)(Post)
