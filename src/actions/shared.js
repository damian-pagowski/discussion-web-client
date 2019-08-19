import { handleReceiveCategories } from './categories'
import { handleReceivePosts } from './posts'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return dispatch => {
    dispatch(showLoading())
    dispatch(handleReceiveCategories())
    dispatch(handleReceivePosts())
    dispatch(hideLoading())
  }
}
