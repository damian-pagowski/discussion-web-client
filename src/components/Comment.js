import React from 'react'
import { connect } from 'react-redux'
import { FaThumbsDown } from 'react-icons/fa'
import { FaThumbsUp } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'

class Comment extends React.Component {
  render () {
    const { comment } = this.props

    const dateFormatted = new Date(comment.timestamp).toUTCString()

    return (
      <div className='post-container mt-2'>
        <div className='card'>
          <div className='card-header'>
            <small>
              <strong>{comment.author}</strong> &bull; Points:
              <strong>{comment.voteScore}</strong> &bull; Posted on
              <strong>{dateFormatted}</strong>
            </small>
          </div>
          <div className='card-body'>
            <p className='card-text'>
              {comment.body}
            </p>
            <div className='custom-card-footer text-muted pull-to-right'>
              <div className='my-badge'>
                <span className='icon'>
                  <FaEdit />
                </span>
                <span className='icon'>
                  <FaTrash />
                </span>
              </div>

              <div className='my-badge'>
                <span className='icon'>
                  <FaThumbsDown />
                </span>
                <span className='icon'>
                  <FaThumbsUp />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps (state, props) {
  const { comments } = state
  const { commentId } = props
  const comment = Object.values(comments).filter(
    comment => comment.id === commentId
  )[0]
  console.log('====================================')
  console.log('Comment >>', JSON.stringify(comment))
  console.log('====================================')
  return { comment }
}

export default connect(mapStateToProps)(Comment)
