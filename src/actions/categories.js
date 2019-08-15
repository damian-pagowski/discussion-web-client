import { showLoading, hideLoading } from 'react-redux-loading'
import { baseUrl } from './shared'

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
    const requestConfig = {
      method: 'GET',
      headers: new Headers({
        Authorization: 'whatever'
      })
    }

    return fetch(`${baseUrl}/categories`, requestConfig)
      .then(res => res.json())
      .then(cat => dispatch(receiveCategories(cat["categories"])))
      .then(() => dispatch(hideLoading()))
  }
}
