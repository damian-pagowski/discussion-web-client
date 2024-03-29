import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
// style
import './styles/App.css'
import './styles/bootstrap.min.css'
// redux
import reducer from './reducers'
import middleware from './middleware' 
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(reducer, middleware)
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
