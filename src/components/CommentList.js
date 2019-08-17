import React from 'react'
import Comment from './Comment'
import { connect } from 'react-redux'
import { handleReceiveComments } from '../actions/comments'
class CommentList extends React.Component {
  render () {
    const { comments } = this.props

    return (
      <div className='post-list-container'>
        {comments.map((comment, index) =>
          <div key={index}>
            <Comment commentId={comment.id} />
          </div>
        )}
     
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { comments } = state
  console.log('====================================')
  console.log('Comment list >>', JSON.stringify(comments))
  console.log('====================================')
  return { comments : Object.values(comments) }
}

export default connect(mapStateToProps)(CommentList)
