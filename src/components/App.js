import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Navbar from './Navbar'
import CategoryList from './category/CategoryList'
import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import PostDetails from './post/PostDetails'
import NotFound from './NotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CreateComment from './comment/CreateComment'

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
                <Route
                  exact
                  path='/edit-comment/:post_id/:comment_id'
                  component={CreateComment}
                />
                <Route exact path='/' component={PostList} />
                <Route path='/error-404' component={NotFound} />
                <Route component={NotFound} />{' '}
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
