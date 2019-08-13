import React from 'react'
import Category from './Category'
import { connect } from 'react-redux'

import { FaCrown } from 'react-icons/fa'

class CategoryList extends React.Component {
  render () {
    const { categories } = this.props

    return (
      <div className='card-list-container'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>
              <FaCrown /> Top Categories
            </h5>
          </div>
          <ul className='list-group list-group-flush'>
            {Object.keys(categories).map(index =>
              <li key={index} className='list-group-item'>
                <Category categoryIndex={index} />
              </li>
            )}
          </ul>
          {/* <div className='card-body'> */}
            {/* <a href='#' className='card-link'>
              Card link
            </a>
            <a href='#' className='card-link'>
              Another link
            </a> */}
          {/* </div> */}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { categories } = state
  return { categories }
}

export default connect(mapStateToProps)(CategoryList)
