import React from 'react'

import MainPage from './MainPage'
import Navbar from './Navbar'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <MainPage />
      </div>
    )
  }

  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
}

export default connect()(App)
