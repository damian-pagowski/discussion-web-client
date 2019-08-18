export const baseUrl = 'http://localhost:3001'

export const defaultHeader = new Headers({
  Authorization: 'whatever'
})

export const headerPost = new Headers({
  Authorization: 'whatever',
  'Content-Type': 'application/json'
})

export function _getComments (postId) {
  const requestConfig = {
    method: 'GET',
    headers: defaultHeader
  }
  return fetch(`${baseUrl}/posts/${postId}/comments`, requestConfig).then(res =>
    res.json()
  )
}

export function _deleteComment (commentID) {
  const requestConfig = {
    method: 'DELETE',
    headers: defaultHeader
  }
  return fetch(`${baseUrl}/comments/${commentID}`, requestConfig).then(res =>
    res.json()
  )
}

export function _createComment (data) {
  const requestConfig = {
    method: 'POST',
    headers: headerPost,
    body: JSON.stringify(data)
  }
  return fetch(`${baseUrl}/comments`, requestConfig)
}

export function _voteOnComment (commentID, option) {
  const requestConfig = {
    method: 'POST',
    headers: headerPost,
    body: JSON.stringify({ option: option })
  }
  return fetch(`${baseUrl}/comments/${commentID}`, requestConfig).then(res =>
    res.json().then(r => console.log('VOTE ON COMMENT RESPONSE >> ', r))
  )
}

export function _getComment (commentID) {
  const requestConfig = {
    method: 'GET',
    headers: defaultHeader
  }
  return fetch(`${baseUrl}/comments/${commentID}`, requestConfig).then(res =>
    res.json().then(r => console.log('GET COMMENT RESPONSE >> ', r))
  )
}

export function _updateComment (commentID, body) {
  const requestConfig = {
    method: 'PUT',
    headers: headerPost,
    body: JSON.stringify(body)
  }
  return fetch(`${baseUrl}/comments/${commentID}`, requestConfig).then(res =>
    res.json().then(r => console.log('UPDATE COMMENT RESPONSE >> ', r))
  )
}

export function _getCategories () {
  const requestConfig = {
    method: 'GET',
    headers: defaultHeader
  }
  return fetch(`${baseUrl}/categories`, requestConfig).then(res => res.json())
}

export function _getPosts () {
  const requestConfig = {
    method: 'GET',
    headers: defaultHeader
  }
  return fetch(`${baseUrl}/posts`, requestConfig).then(res => res.json())
}

export function _getPostsByCategory (category) {
  const requestConfig = {
    method: 'GET',
    headers: defaultHeader
  }
  return fetch(`${baseUrl}/${category}/posts`, requestConfig).then(res =>
    res.json()
  )
}

export function _updatePost (postId, body) {
  const requestConfig = {
    method: 'PUT',
    headers: headerPost,
    body: JSON.stringify(body)
  }
  return fetch(`${baseUrl}/posts/${postId}`, requestConfig)
}

export function _voteOnPost (postID, opt) {
  const requestConfig = {
    method: 'POST',
    headers: headerPost,
    body: JSON.stringify({ option: opt })
  }
  return fetch(`${baseUrl}/posts/${postID}`, requestConfig).then(res =>
    console.log('API RESPONSE >> ', res.json())
  )
}

export function _deletePost (postID) {
  const requestConfig = {
    method: 'DELETE',
    headers: defaultHeader
  }
  return fetch(`${baseUrl}/posts/${postID}`, requestConfig).then(res =>
    res.json()
  )
}

export function _createPost (data) {
  const requestConfig = {
    method: 'POST',
    headers: headerPost,
    body: JSON.stringify(data)
  }
  return fetch(`${baseUrl}/posts`, requestConfig)
}
