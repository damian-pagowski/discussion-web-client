
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const CREATE_POST = 'CREATE_POST'


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
