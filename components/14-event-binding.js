import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props){
        super(props)
        this.state={
            msg: "Before Click"
        }

        // method 3
        // this.clickevent = this.clickevent.bind(this)
    }

    // method 2
    // clickevent(){
    //     this.setState({
    //         msg: "After Click"
    //     })
    // }

    // method 4
    clickevent = () => {
        this.setState({
            msg: "After click"
        })
    }
  render() {
    return (
      <div>
        <p>{this.state.msg}</p>
        {/* method 1 */}
        {/* <button onClick={this.clickevent.bind(this)}>Event Binding Using .bind</button> */}

        {/* method 2 */}
        {/* <button onClick={() => this.clickevent()}>Event Binding Using Arrow Function</button>*/}

        {/* method 3 MOst Used */}
        {/* <button onClick={this.clickevent}>Event Binding In Constructor</button> */}

        {/* method 4 */}
        <button onClick={this.clickevent}>Event Binding Inside the Arrow Function</button>

      </div>
    )
  }
}

export default EventBinding
