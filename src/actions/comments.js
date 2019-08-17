import { showLoading, hideLoading } from 'react-redux-loading'
import { baseUrl, defaultHeader } from './shared'

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

// export function handleCreateComment (data) {
//   return (dispatch, getState) => {
//     dispatch(showLoading())
//     const requestConfig = {
//       method: 'POST',
//       headers: defaultHeader,
//       body: JSON.stringify(data)
//     }
//     return fetch(`${baseUrl}/posts`, requestConfig)
//       .then(() => dispatch(createPost(data)))
//       .then(() => dispatch(hideLoading()))
//   }
// }

export function updateComment (comment) {
  return {
    type: UPDATE_COMMENT,
    comment
  }
}

// function deleteComment (postID) {
//   return {
//     type: DELETE_COMMENT,
//     postID
//   }
// }

// export function handleDeletePost (postID) {
//   return (dispatch, getState) => {
//     dispatch(showLoading())
//     const requestConfig = {
//       method: 'DELETE',
//       headers: defaultHeader
//     }
//     return fetch(`${baseUrl}/posts/${postID}`, requestConfig)
//       .then(res => console.log('API RESPONSE >> ', res.json()))
//       .then(() => dispatch(deletePost(postID)))
//       .then(() => dispatch(hideLoading()))
//   }
// }

// export function handleUpVotePosts (postID) {
//   return handlePostVoting(postID, 'upVote')
// }

// export function handleDownVotePosts (postID) {
//   return handlePostVoting(postID, 'downVote')
// }

// function upVotePost (postID) {
//   return {
//     type: UP_VOTE_COMMENT,
//     postID
//   }
// }

// function downVotePost (postID) {
//   return {
//     type: DOWN_VOTE_COMMENT,
//     postID
//   }
// }

// function handlePostVoting (postID, opt) {
//   return (dispatch, getState) => {
//     dispatch(showLoading())
//     const requestConfig = {
//       method: 'POST',
//       headers: defaultHeader,
//       body: JSON.stringify({ option: opt })
//     }
//     return fetch(`${baseUrl}/posts/${postID}`, requestConfig)
//       .then(res => console.log('API RESPONSE >> ', res.json()))
//       .then(() => dispatch(upVotePost(postID)))
//       .then(() => dispatch(hideLoading()))
//   }
// }
