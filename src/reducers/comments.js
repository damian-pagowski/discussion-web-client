import {
  RECEIVE_COMMENTS,
  CREATE_COMMENT,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT
} from '../actions/comments'

export default function comments (state = {}, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return {
        ...state,
        ...action.comments
      }

    case CREATE_COMMENT:
      const keys = Object.keys(state)
      console.log(keys)
      const index = parseInt(keys.length > 0 ? keys[keys.length - 1] : 0) + 1
      return {
        ...state,
        [index]: { ...action.comment }
      }

    case UP_VOTE_COMMENT:
      const copyOfState = {
        ...state
      }
      Object.keys(copyOfState).forEach(function (key) {
        if (action.commentID == copyOfState[key].id) {
          console.log(
            'FROM REDUCER - UP_VOTE_COMMENT: ',
            copyOfState[key].voteScore
          )
          copyOfState[key].voteScore = ++copyOfState[key].voteScore
        }
      })
      return copyOfState

    case DOWN_VOTE_COMMENT:
      const copyOfStateDownVote = {
        ...state
      }
      Object.keys(copyOfStateDownVote).forEach(function (key) {
        if (action.commentID === copyOfStateDownVote[key].id) {
          console.log(
            'FROM REDUCER - UP_VOTE_COMMENT: ',
            copyOfStateDownVote[key].voteScore
          )
          copyOfStateDownVote[key].voteScore = --copyOfStateDownVote[key]
            .voteScore
        }
      })
      return copyOfStateDownVote

    case DELETE_COMMENT:
      const copyOfStateDelete = {
        ...state
      }
      Object.keys(copyOfStateDelete).forEach(function (key) {
        if (action.commentID == copyOfStateDelete[key].id) {
          delete copyOfStateDelete[key]
        }
      })
      return copyOfStateDelete

    case UPDATE_COMMENT:
      const copyOfStateUpdate = {
        ...state
      }
      Object.keys(copyOfStateUpdate).forEach(function (key) {
        if (action.commentID == copyOfStateUpdate[key].id) {
          copyOfStateUpdate[key].body = action.comment.body
          copyOfStateUpdate[key].timestamp = action.comment.timestamp
        }
      })
      return copyOfStateUpdate

    default:
      return state
  }
}
