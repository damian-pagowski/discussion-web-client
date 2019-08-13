import React from 'react'
import CategoryList from './CategoryList'
import PostList from './PostList'

export default class MainPage extends React.Component {

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-9'>
            <PostList />
          </div>
          <div className='col-sm-3'>
            <CategoryList />
          </div>
        </div>
      </div>
    )
  }
}