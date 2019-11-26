import api from "../api";

export function fetchPost(id) {
  return function thunk(dispatch, getState) {
    api(`/posts/${id}`)
      .then(post => {
        dispatch(setPost(post));
      })
    api(`/posts/${id}/comments`)
      .then(comments => {
        dispatch(addComment(comments['rows']))
      })
  }
}

export function setPost(post) {
  return {
    type: "GETTING_POST",
    payload: post
  }
}

export function addComment(comments) {
  return {
    type: "GETTING_COMMENTS",
    payload: comments
  }
}