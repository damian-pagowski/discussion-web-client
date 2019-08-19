import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render () {
    return (
      <nav className='navbar navbar-dark bg-dark transparent-navbar'>
        <a className='navbar-brand' href='/'>
          <span className='logo'>Readable</span>
        </a>
        <ul className='navbar-nav px-2 mr-auto '>
          <li className='nav-item'>
            <Link
              to='/posts/new'
              className='nav-item nav-link btn btn-outline-secondary my-2 my-sm-0'
            >
              <span className='custom-nav-item'>Create Post</span>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
