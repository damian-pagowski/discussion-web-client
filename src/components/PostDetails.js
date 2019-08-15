import React from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/posts'
import { generateUID } from '../utils/util'

import { FaThumbsDown } from 'react-icons/fa'
import { FaThumbsUp } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import Post from './Post'
import CreateComment from './CreateComment'
import Comment from './Comment'
class PostDetails extends React.Component {
  render () {
    const post = {
      author: 'thingtwo',
      body: 'Everyone says so after all.',
      category: 'react',
      commentCount: 2,
      deleted: false,
      id: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1467166872634,
      title: 'Udacity is the best place to learn React',
      voteScore: 6
    }
    const dateFormatted = new Date(post.timestamp).toUTCString()

    return (
      <div className='d-flex flex-column'>
        <Post passedPostId={0} />

        <CreateComment/>
        <Comment/>
        
        {/* end of card 2 */}
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { categories } = state
  return { categories }
}

export default connect(mapStateToProps)(PostDetails)
