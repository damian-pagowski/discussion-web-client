import { log } from "util";
import { thisExpression } from "@babel/types";
import { showLoading, hideLoading } from 'react-redux-loading'
import { baseUrl } from './shared'
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
      headers: new Headers({
        Authorization: 'whatever'
      })
    }

    return fetch(`${baseUrl}/posts`, requestConfig)
      .then(res => res.json())
      .then(obj => Object.values(obj))
      .then(posts => dispatch(receivePosts(posts)))
      .then(() => dispatch(hideLoading()))
  }
}

export function receivePosts (posts) {
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

export function downVotePost (postID) {
  return {
    type: DOWN_VOTE_POST,
    postID
  }
}

export function upVotePost (postID) {
  return {
    type: UP_VOTE_POST,
    postID
  }
}
