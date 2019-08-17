import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Navbar from './Navbar'
import CategoryList from './CategoryList'
import PostList from './PostList'
import CreatePost from './CreatePost'
import PostDetails from './PostDetails'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col-sm-9'>
              <Switch>
                <Route exact path='/posts/new' component={CreatePost} />
                <Route
                  exact
                  path='/posts/details/:post_id'
                  component={PostDetails}
                />
                <Route
                  exact
                  path='/posts/edit/:post_id'
                  component={CreatePost}
                />
                <Route exact path='/' component={PostList} />
                <Redirect from='*' to='/' />
              </Switch>
            </div>
            <div className='col-sm-3'>
              <CategoryList />
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }

  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
}

export default connect()(App)
