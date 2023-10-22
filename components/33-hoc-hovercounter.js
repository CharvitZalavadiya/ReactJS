import React, { Component } from 'react'

class HoverCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    hoverHandler = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

  render() {
    const {count} = this.state
    return (
      <div>
        <p onMouseOver={this.hoverHandler}>Hovered {count} Times</p>
      </div>
    )
  }
}

export default HoverCounter
