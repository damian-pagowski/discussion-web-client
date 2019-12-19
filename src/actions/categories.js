import { showLoading, hideLoading } from 'react-redux-loading'
import { _getCategories } from '../utils/api'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export function receiveCategories (categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

export function handleReceiveCategories () {
  return (dispatch, getState) => {
    dispatch(showLoading())
    return _getCategories()
      .then(categories => dispatch(receiveCategories(categories)))
      .then(() => dispatch(hideLoading()))
  }
}
