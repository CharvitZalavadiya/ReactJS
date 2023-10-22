import React, { Component } from 'react'
import withCounter from './34-counter'

class ClickCounter extends Component {
  render() {
    const {count, incCount} = this.props
    return (
      <div>
        <button onClick={incCount}>{this.props.name}Clicked {count} Times</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter, 4)
