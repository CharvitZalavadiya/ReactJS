import React, { Component } from 'react'
import { UserConsumer } from './39-user-provider'

class CompF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
            {username => {
                return <div>HII {username}</div>
            }}
        </UserConsumer>
      </div>
    )
  }
}

export default CompF
