import React from 'react'

const Hellojsx = () => {
    // without jsx
    // return (
    //     <div>
    //         <p>8-JSX</p>
    //     </div>
    // )

    // with jsx
    return React.createElement('div',   {id:'helloid', className:'helloclass'},     React.createElement('p', null, '8-JSX'))
}

export default Hellojsx