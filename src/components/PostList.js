import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'

class PostList extends React.Component {
  render () {
    const { posts } = this.props

    return (
      <div className='post-list-container'>
        {posts.map((post, index) =>
          <div key={index}>
            <Post passedPostId={post} />
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { posts } = state
  console.log('====================================')
  console.log('posts list >>', JSON.stringify(posts))
  console.log('====================================')
  const postIds = Object.values(posts).map(post => post.id)
  return { posts: postIds }
}

export default connect(mapStateToProps)(PostList)
