import { showLoading, hideLoading } from 'react-redux-loading'
import { baseUrl, defaultHeader, headerPost } from './shared'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT'
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

export function handleReceiveComments (postId) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    const requestConfig = {
      method: 'GET',
      headers: defaultHeader
    }
    return fetch(`${baseUrl}/posts/${postId}/comments`, requestConfig)
      .then(res => res.json())
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
    const requestConfig = {
      method: 'POST',
      headers: headerPost,
      body: JSON.stringify(data)
    }
    return fetch(`${baseUrl}/comments`, requestConfig)
      .then(() => dispatch(createComment(data)))
      .then(() => dispatch(hideLoading()))
  }
}

export function updateComment (comment) {
  return {
    type: UPDATE_COMMENT,
    comment
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
    const requestConfig = {
      method: 'DELETE',
      headers: defaultHeader
    }
    return fetch(`${baseUrl}/comments/${commentID}`, requestConfig)
      .then(res => res.json().then(r => console.log('API RESPONSE >> ', r)))
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
    const requestConfig = {
      method: 'POST',
      headers: headerPost,
      body: JSON.stringify({ option: opt })
    }
    return fetch(`${baseUrl}/comments/${commentID}`, requestConfig)
      .then(res => res.json().then(r => console.log('API RESPONSE >> ', r)))
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
