import React, { Component } from 'react'

class ClassClick extends Component {
    clickevent(){
        console.log("Class clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickevent}>Class</button>
      </div>
    )
  }
}

export default ClassClick
