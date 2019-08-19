import React from 'react'
import Comment from './Comment'
import { connect } from 'react-redux'

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
  return { comments : Object.values(comments) }
}

export default connect(mapStateToProps)(CommentList)
