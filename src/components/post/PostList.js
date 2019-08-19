import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'

class PostList extends React.Component {
  render () {
    const { posts } = this.props

    return Object.entries(posts).length > 0
      ? <div className='post-list-container'>
        {posts.map((post, index) =>
          <div key={index}>
            <Post passedPostId={post} />
          </div>
          )}
      </div>
      : <h5>Sorry, no posts in this category</h5>
  }
}

function mapStateToProps (state) {
  const { posts } = state
  const postIds = Object.values(posts).map(post => post.id)
  return { posts: postIds }
}

export default connect(mapStateToProps)(PostList)
