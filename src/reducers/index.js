import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'
import comments from './comments'

import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  loadingBar: loadingBarReducer,
  posts,
  categories,
  comments,
})
