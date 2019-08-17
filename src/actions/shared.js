import { handleReceiveCategories } from './categories'
import { handleReceivePosts } from './posts'
export const baseUrl = 'http://localhost:3001'
export const defaultHeader = new Headers({
  Authorization: 'whatever'
})

export const headerPost = new Headers({
  Authorization: 'whatever',
  'Content-Type': 'application/json'
})

export function handleInitialData () {
  return dispatch => {
    dispatch(handleReceiveCategories())
    dispatch(handleReceivePosts())
  }
}
