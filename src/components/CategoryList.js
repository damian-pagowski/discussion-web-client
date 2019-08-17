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
            <h5 className='card-title'>Categories</h5>
          </div>
          <ul className='list-group list-group-flush'>
            {Object.keys(categories).map(index =>
              <li key={index} className='list-group-item'>
                <Category categoryIndex={index} />
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { categories } = state
  console.log('====================================')
  console.log('CATEGORIES')
  console.log(JSON.stringify(categories))
  console.log('====================================')
  return { categories }
}

export default connect(mapStateToProps)(CategoryList)
