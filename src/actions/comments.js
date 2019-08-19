import { showLoading, hideLoading } from 'react-redux-loading'
import {
  _voteOnComment,
  _getComments,
  _createComment,
  _deleteComment,
  _updateComment
} from '../utils/api'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT'
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

export function handleReceiveComments (postId) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    return _getComments(postId)
      .then(comments => dispatch(receiveComments(comments)))
      .then(() => dispatch(hideLoading()))
  }
}

function receiveComments (comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

export function createComment (comment) {
  return {
    type: CREATE_COMMENT,
    comment
  }
}

export function handleCreateComment (data) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    return _createComment(data)
      .then(() => dispatch(createComment(data)))
      .then(() => dispatch(hideLoading()))
  }
}

function deleteComment (commentID) {
  return {
    type: DELETE_COMMENT,
    commentID
  }
}

export function handleDeleteComment (commentID) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    return _deleteComment(commentID)
      .then(() => dispatch(deleteComment(commentID)))
      .then(() => dispatch(hideLoading()))
  }
}

export function handleUpVoteComment (commentID) {
  return handleCommentVoting(commentID, 'upVote')
}

export function handleDownVoteComment (commentID) {
  return handleCommentVoting(commentID, 'downVote')
}

function upVoteComment (commentID) {
  return {
    type: UP_VOTE_COMMENT,
    commentID
  }
}

function downVoteComment (commentID) {
  return {
    type: DOWN_VOTE_COMMENT,
    commentID
  }
}

function handleCommentVoting (commentID, opt) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    return _voteOnComment(commentID, opt)
      .then(() =>
        dispatch(
          opt === 'upVote'
            ? upVoteComment(commentID)
            : downVoteComment(commentID)
        )
      )
      .then(() => dispatch(hideLoading()))
  }
}

function updateComment (postID, commentID, comment) {
  return {
    type: UPDATE_COMMENT,
    postID,
    commentID,
    comment
  }
}

export function handleUpdateComment (postID, commentID, comment) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    return _updateComment(commentID, comment)
      // .then(() => dispatch(updateComment(postID, commentID, comment)))
      .then(() => dispatch(hideLoading()))
  }
}
