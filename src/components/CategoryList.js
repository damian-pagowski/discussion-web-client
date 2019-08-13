import React from 'react'
import Category from './Category'

export default class CategoryList extends React.Component {
  render () {
    return (
      <div className='card-list-container'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className='list-group list-group-flush'>
            <Category />
            <Category />
            <Category />
            <Category />

            <Category />

            <Category />

            <Category />

            <Category />
          </ul>
          <div className='card-body'>
            <a href='#' className='card-link'>
              Card link
            </a>
            <a href='#' className='card-link'>
              Another link
            </a>
          </div>
        </div>
      </div>
    )
  }
}
