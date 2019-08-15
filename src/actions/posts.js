import { showLoading, hideLoading } from 'react-redux-loading'
import { baseUrl } from './shared'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const CREATE_POST = 'CREATE_POST'

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
