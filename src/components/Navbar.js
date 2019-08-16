import React from 'react'
import { FaPen } from 'react-icons/fa'
import { Link, BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Navbar extends React.Component {
  render () {
    return (
        <nav className='navbar navbar-dark bg-dark transparent-navbar'>
          <a className='navbar-brand' href='/'>
            Readable
          </a>
          <ul className='navbar-nav px-2 mr-auto '>
            <li className='nav-item'>
              <Link to='/posts/new'>
                <a
                  href='#'
                  className='nav-item nav-link btn btn-outline-secondary my-2 my-sm-0'
                >
                  <span className='custom-nav-item'>Create Post</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
    )
  }
}

// function mapStateToProps (state, props) {
//   console.log('====================================');
//   console.log("NAVBAR >>", props);
//   console.log('====================================');
//   return { state }
// }

export default Navbar // connect(mapStateToProps)(Navbar)
