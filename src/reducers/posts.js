import {
  RECEIVE_POSTS,
  CREATE_POST,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  DELETE_POST
} from '../actions/posts'

export default function posts (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      // console.log("LENGTH POSTS>>", action.posts.length)
      // console.log("LENGTH POSTS>>", action.posts[0])

      return {
        ...state,
        ...action.posts
      }

    case CREATE_POST:
      const keys = Object.keys(state)
      console.log(keys)
      const index = parseInt(keys.length > 0 ? keys[keys.length - 1] : 0) + 1
      console.log(index)
      return {
        ...state,
        ...{ [index]: action.post }
      }

    case UP_VOTE_POST:
      const copyOfState = {
        ...state
      }
      Object.keys(copyOfState).forEach(function (key) {
        if (action.postID == copyOfState[key].id) {
          copyOfState[key].voteScore = ++copyOfState[key].voteScore
        }
      })
      return copyOfState

    case DOWN_VOTE_POST:
      const copyOfStateDownVote = {
        ...state
      }

      Object.keys(copyOfStateDownVote).forEach(function (key) {
        if (action.postID === copyOfStateDownVote[key].id) {
          copyOfStateDownVote[key].voteScore = --copyOfStateDownVote[key]
            .voteScore
        }
      })
      return copyOfStateDownVote

    case DELETE_POST:
      const copyOfStateDelete = {
        ...state
      }
      Object.keys(copyOfStateDelete).forEach(function (key) {
        if (action.postID == copyOfStateDelete[key].id) {
          delete copyOfStateDelete[key]
        }
      })
      return copyOfStateDelete

    default:
      return state
  }
}
