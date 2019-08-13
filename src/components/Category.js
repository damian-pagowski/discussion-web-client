import React from 'react'
import { connect } from 'react-redux'

class Category extends React.Component {
  render () {
    const { categoryIndex, categories } = this.props
    const category = categories[categoryIndex]
    console.log(category)
    console.log(JSON.stringify(this.props))
    return (
      // <p> CHUJ</p>
      <div onClick={() => this.go(category.path)}>{category.name}</div>
    )
  }
  go(whereToGo){
    console.log(whereToGo)
  }
}

function mapStateToProps (state) {
  const { categories } = state
  return {  categories }
}

export default connect(mapStateToProps)(Category)

