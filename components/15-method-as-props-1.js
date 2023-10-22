import React, { Component } from 'react'
import ChildComponent from './15-method-as-props-2'

class ParentComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            parentname: 'Gopalbhai'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(ChildName){
        console.log(`Hello Parent ${this.state.parentname} of ${ChildName}`)
    }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
