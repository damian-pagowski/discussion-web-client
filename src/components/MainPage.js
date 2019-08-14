import React from 'react'
import CategoryList from './CategoryList'
import PostList from './PostList'
import CreatePost from './CreatePost'
export default class MainPage extends React.Component {

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-9'>
            {/* <PostList /> */}
            <CreatePost/>
          </div>
          <div className='col-sm-3'>
            <CategoryList />
          </div>
        </div>
      </div>
    )
  }
}