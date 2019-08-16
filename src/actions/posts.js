import { thisExpression } from '@babel/types'
import { showLoading, hideLoading } from 'react-redux-loading'
import { baseUrl, defaultHeader } from './shared'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const UP_VOTE_POST = 'UP_VOTE_POST'
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST = 'UPDATE_POST'

export function handleReceivePosts () {
  return (dispatch, getState) => {
    dispatch(showLoading())
    const requestConfig = {
      method: 'GET',
      headers: defaultHeader
    }
    return fetch(`${baseUrl}/posts`, requestConfig)
      .then(res => res.json())
     .then(data => [...Object.values(data)])
      .then(posts => dispatch(receivePosts(posts)))
      .then(() => dispatch(hideLoading()))
  }
}

function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function createPost (post) {
  return {
    type: CREATE_POST,
    post
  }
}

export function updatePost (post) {
  return {
    type: UPDATE_POST,
    post
  }
}

function deletePost (postID) {
  return {
    type: DELETE_POST,
    postID
  }
}

export function handleDeletePost (postID) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    const requestConfig = {
      method: 'DELETE',
      headers: defaultHeader
    }
    return fetch(`${baseUrl}/posts/${postID}`, requestConfig)
      .then(res => console.log('API RESPONSE >> ', res.json()))
      .then(() => dispatch(deletePost(postID)))
      .then(() => dispatch(hideLoading()))
  }
}

export function handleUpVotePosts (postID) {
  return handlePostVoting(postID, 'upVote')
}

export function handleDownVotePosts (postID) {
  return handlePostVoting(postID, 'downVote')
}

function upVotePost (postID) {
  return {
    type: UP_VOTE_POST,
    postID
  }
}

function downVotePost (postID) {
  return {
    type: DOWN_VOTE_POST,
    postID
  }
}

function handlePostVoting (postID, opt) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    const requestConfig = {
      method: 'POST',
      headers: defaultHeader,
      body: JSON.stringify({ option: opt })
    }
    return fetch(`${baseUrl}/posts/${postID}`, requestConfig)
      .then(res => console.log('API RESPONSE >> ', res.json()))
      .then(() => dispatch(upVotePost(postID)))
      .then(() => dispatch(hideLoading()))
  }
}
