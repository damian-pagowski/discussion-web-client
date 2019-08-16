import React from 'react'
import { connect } from 'react-redux'
import CreateComment from './CreateComment'
import Comment from './Comment'
import PostReadOnly from './PostReadOnly'

class PostDetails extends React.Component {
  render () {
    return (
      <div className='d-flex flex-column'>
        <PostReadOnly passedPostId={this.props.id} />
        <CreateComment />
        <Comment />
      </div>
    )
  }
}

function mapStateToProps (state, props) {
  const id = props.match.params.post_id
  const { categories } = state
  return { categories, id }
}

export default connect(mapStateToProps)(PostDetails)
