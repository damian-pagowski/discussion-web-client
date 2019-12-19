require("dotenv").config();

const baseUrl = process.env.REACT_APP_SERVER;

export const defaultHeader = new Headers({
  Authorization: "whatever",
});

export const headerPost = new Headers({
  "Content-Type": "application/json",
});

export function _getComments(postId) {
  const requestConfig = {
    method: "GET",
    headers: defaultHeader,
  };
  return fetch(`${baseUrl}/posts/${postId}/comments`, requestConfig).then(res =>
    res.json()
  );
}

export function _deleteComment(commentID) {
  const requestConfig = {
    method: "DELETE",
    headers: defaultHeader,
  };
  return fetch(`${baseUrl}/comments/${commentID}`, requestConfig).then(res =>
    res.json()
  );
}

export function _createComment(data) {
  const requestConfig = {
    method: "POST",
    headers: headerPost,
    body: JSON.stringify(data),
  };
  return fetch(`${baseUrl}/comments`, requestConfig).then(res => res.json());
}

export function _voteOnComment(commentID, option) {
  const requestConfig = {
    method: "POST",
    headers: headerPost,
    body: JSON.stringify({ option: option }),
  };
  return fetch(`${baseUrl}/comments/${commentID}`, requestConfig).then(res =>
    res.json()
  );
}

export function _getComment(commentID) {
  const requestConfig = {
    method: "GET",
    headers: defaultHeader,
  };
  return fetch(`${baseUrl}/comments/${commentID}`, requestConfig).then(res =>
    res.json()
  );
}

export function _updateComment(commentID, body) {
  const requestConfig = {
    method: "PUT",
    headers: headerPost,
    body: JSON.stringify(body),
  };
  return fetch(`${baseUrl}/comments/${commentID}`, requestConfig).then(res =>
    res.json()
  );
}

export function _getCategories() {
  return fetch(`${baseUrl}/categories`).then(res => res.json());
}

export function _getPosts() {
  return fetch(`${baseUrl}/posts`).then(posts => posts.json());
}

export function _getPostsByCategory(category) {
  return fetch(`${baseUrl}/${category}/posts`).then(res => res.json());
}

export function _updatePost(postId, body) {
  const requestConfig = {
    method: "PUT",
    headers: headerPost,
    body: JSON.stringify(body),
  };
  return fetch(`${baseUrl}/posts/${postId}`, requestConfig).then(res =>
    res.json()
  );
}

export function _voteOnPost(postID, opt) {
  const requestConfig = {
    method: "POST",
    headers: headerPost,
    body: JSON.stringify({ option: opt }),
  };
  return fetch(`${baseUrl}/posts/${postID}`, requestConfig).then(res =>
    res.json()
  );
}

export function _deletePost(postID) {
  const requestConfig = {
    method: "DELETE",
    headers: defaultHeader,
  };
  return fetch(`${baseUrl}/posts/${postID}`, requestConfig).then(res =>
    res.json()
  );
}

export function _createPost(data) {
  const requestConfig = {
    method: "POST",
    headers: headerPost,
    body: JSON.stringify(data),
  };
  return fetch(`${baseUrl}/posts`, requestConfig).then(res => res.json());
}

export function _getPostDetails(id) {
  const requestConfig = {
    method: "GET",
    headers: defaultHeader,
  };
  return fetch(`${baseUrl}/posts/${id}`, requestConfig).then(res => res.json());
}

export function _getCommentDetails(id) {
  const requestConfig = {
    method: "GET",
    headers: defaultHeader,
  };
  return fetch(`${baseUrl}/comments/${id}`, requestConfig).then(res =>
    res.json()
  );
}
