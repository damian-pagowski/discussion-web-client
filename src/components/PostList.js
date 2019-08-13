import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'

class PostList extends React.Component {
  render () {
    const { posts } = this.props

    return (
      <div className='post-list-container'>
        {Object.keys(posts).map(postIndex =>
          <div key={postIndex}>
            <Post passedPostId={postIndex} />
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { posts } = state
  return { posts }
}

export default connect(mapStateToProps)(PostList)
