import React from 'react'
import { FaPen } from 'react-icons/fa'

export default class Navbar extends React.Component {
  render () {
    return (
      <nav className='navbar navbar-dark bg-dark transparent-navbar'>
        <a className='navbar-brand' href='#'>
          Readable
        </a>
        <ul class='navbar-nav px-2 mr-auto '>
          <li class='nav-item '>
            <a
              className='nav-item nav-link btn btn-outline-secondary my-2 my-sm-0'
              href='#'
            >
              <FaPen/>
              Create Post
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}
