import { handleReceiveCategories } from './categories'
import { handleReceivePosts } from './posts'
export const baseUrl = 'http://localhost:3001'

export function handleInitialData () {
  return dispatch => {
    dispatch(handleReceiveCategories())
    dispatch(handleReceivePosts())
  }
}
