import React, { Component } from 'react'
import withCounter from './34-counter'

class HoverCounter extends Component {
  render() {
    const {count, incCount} = this.props
    return (
      <div>
        <p onMouseOver={incCount}>{this.props.name}Hovered {count} Times</p>
      </div>
    )
  }
}

export default withCounter(HoverCounter, 7)
