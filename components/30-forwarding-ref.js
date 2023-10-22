import React from 'react'

const FWInput = React.forwardRef((props,refPara) => {
    return(
        <div>
            <input type='text' ref={refPara} />
        </div>
    )
})

export default FWInput
