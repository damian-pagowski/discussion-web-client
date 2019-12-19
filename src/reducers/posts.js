import {
  RECEIVE_POSTS,
  RECEIVE_POSTS_BY_CATEGORY,
  CREATE_POST,
  UP_VOTE_POST,
  UPDATE_POST,
  DOWN_VOTE_POST,
  DELETE_POST,
} from "../actions/posts";

export default function posts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts,
      };

    case RECEIVE_POSTS_BY_CATEGORY:
      return {
        ...action.posts,
      };

    case CREATE_POST:
      const keys = Object.keys(state);
      console.log(keys);
      const index = keys.length > 0 ? keys[keys.length] : 1;
      return {
        ...state,
        [index]: { ...action.post },
      };

    case UP_VOTE_POST:
      const copyOfState = {
        ...state,
      };
      Object.keys(copyOfState).forEach(function(key) {
        if (action.postID == copyOfState[key]._id) {
          copyOfState[key].voteScore = ++copyOfState[key].voteScore;
        }
      });
      return copyOfState;

    case UPDATE_POST:
      const copyOfStateUpdate = {
        ...state,
      };
      Object.keys(copyOfStateUpdate).forEach(function(key) {
        if (action.id == copyOfStateUpdate[key]._id) {
          copyOfStateUpdate[key].body = action.post.body;
          copyOfStateUpdate[key].title = action.post.title;
        }
      });
      return copyOfStateUpdate;

    case DOWN_VOTE_POST:
      const copyOfStateDownVote = {
        ...state,
      };

      Object.keys(copyOfStateDownVote).forEach(function(key) {
        if (action.postID === copyOfStateDownVote[key]._id) {
          copyOfStateDownVote[key].voteScore = --copyOfStateDownVote[key]
            .voteScore;
        }
      });
      return copyOfStateDownVote;

    case DELETE_POST:
      const copyOfStateDelete = {
        ...state,
      };
      Object.keys(copyOfStateDelete).forEach(function(key) {
        if (action.postID == copyOfStateDelete[key]._id) {
          delete copyOfStateDelete[key];
        }
      });

      return copyOfStateDelete;

    default:
      return state;
  }
}
