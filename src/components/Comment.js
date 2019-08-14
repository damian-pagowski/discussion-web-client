import React from 'react'
import { connect } from 'react-redux'
import { FaThumbsDown } from 'react-icons/fa'
import { FaThumbsUp } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'

class Comment extends React.Component {
  render () {
    const comment = {
      body:
        ' Quisque suscipit aliquam ipsum a faucibus. Morbi egestas in lorem sed laoreet. Aliquam lobortis volutpat ex id rutrum. Proin commodo a felis at porta.',
      id: 'aaa1234',
      timestamp: '1467166872634',
      author: 'Damian',
      parentId: 'abcd999',
      voteScore: 0
    }
    console.log('====================================')
    console.log(JSON.stringify(this.props))
    console.log('====================================')
    const dateFormatted = new Date(comment.timestamp).toUTCString()

    return (
      <div className='post-container mt-2'>
        <div className='card'>
          <div className='card-header'>

          <small> <strong>{comment.author}</strong> &bull; Points: <strong>{comment.voteScore}</strong>  &bull; Posted on <strong>{dateFormatted}</strong></small>
           
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
function mapStateToProps (state) {
  const { posts } = state
  return { posts }
}

export default connect(mapStateToProps)(Comment)
