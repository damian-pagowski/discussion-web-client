import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

// import MainPage from './MainPage'
import Navbar from './Navbar'
import CategoryList from './CategoryList'
import PostList from './PostList'
import CreatePost from './CreatePost'
import PostDetails from './PostDetails'



class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
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
      </div>
    )
  }

  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
}

export default connect()(App)
