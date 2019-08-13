import React from 'react'
import Post from './Post'

export default class PostList extends React.Component {
  render () {
    return (
      <div className='post-list-container'>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    )
  }
}
