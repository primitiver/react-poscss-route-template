import React, { Component } from 'react'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <div>111</div>
  }
  componentDidMount() {
    console.log(this.props)
  }
}

export default List
