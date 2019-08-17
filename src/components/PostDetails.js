import React from 'react'
import { connect } from 'react-redux'
import CreateComment from './CreateComment'
import PostReadOnly from './PostReadOnly'
import CommentList from './CommentList'
import { handleReceiveComments } from '../actions/comments'

class PostDetails extends React.Component {
  render () {
    return (
      <div className='d-flex flex-column'>
        <PostReadOnly passedPostId={this.props.id} />
        <CreateComment />
        <CommentList passedPostId={this.props.id} />
      </div>
    )
  }
  componentDidMount () {
    this.props.dispatch(handleReceiveComments(this.props.id))
  }
}

function mapStateToProps (state, props) {
  const id = props.match.params.post_id
  const { categories } = state
  return { categories, id }
}

export default connect(mapStateToProps)(PostDetails)
