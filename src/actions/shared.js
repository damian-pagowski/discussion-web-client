import { handleReceiveCategories } from './categories'
import { handleReceivePosts } from './posts'

export function handleInitialData () {
  return dispatch => {
    dispatch(handleReceiveCategories())
    dispatch(handleReceivePosts())
  }
}
