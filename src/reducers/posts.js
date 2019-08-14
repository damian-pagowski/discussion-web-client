import { RECEIVE_POSTS, CREATE_POST } from '../actions/posts'

export default function posts (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts
      }

    case CREATE_POST:
      const keys = Object.keys(state)
      console.log(keys)
      const index = parseInt(keys.length > 0 ? keys[keys.length - 1] : 0) + 1;
      console.log(index)
      return {
        ...state, ...{ [index] : action.post}
      }
    default:
      return state
  }
}
