import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import CategoryList from './category/CategoryList'
import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import PostDetails from './post/PostDetails'
import NotFound from './NotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CreateComment from './comment/CreateComment'
import Sidebar from './Sidebar'

class App extends React.Component {
  state = {
    showSidebar : false
  }

  toggleSidebar = () => {
    this.setState({ showSidebar: !this.state.showSidebar})
  }
  render () {
    return (
      <BrowserRouter>
        <Navbar toggleSidebar={this.toggleSidebar}/>
        <div className='container'>
          { this.state.showSidebar && <Sidebar toggleSidebar={this.toggleSidebar}/>}
          <div className='row'>
            <div className='col-sm-9'>
              <Switch>
                {/*
                /category
                /category/post_ID
                */}
                <Route exact path='/:category' component={PostList} />
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
                  path='/comment/edit/:post_id/:comment_id'
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
}

export default connect()(App)
