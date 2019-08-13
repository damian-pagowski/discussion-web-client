import React from 'react'

export default class Category extends React.Component {
  render () {

    const category ={
      "name": "react",
      "path": "react"
  }
    return (
      <li className='list-group-item' onClick={() => this.go(category.path)}>{category.name}</li>
    )
  }
  go(whereToGo){
    console.log(whereToGo)
  }
}
