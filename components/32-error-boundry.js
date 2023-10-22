import React, { Component } from 'react'

class ErrorBounding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }
    

    static getDerivedStateFromError(error){
        return{
            hasError: true
        }
    }


  render() {
    if(this.state.hasError){
        return(
            <p>Something is wrong</p>
        )
    }
    return this.props.children
  }
}

export default ErrorBounding
