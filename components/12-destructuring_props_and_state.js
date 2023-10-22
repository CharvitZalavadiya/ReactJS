import React from "react";


// Method 1
// const DeProps = ({name, age}) => {
//     return(
//         <div>
//             <p>{name} - Age : {age}</p>    
//         </div>
//     )
// }


// Method 2
const DeProps = props => {
    const {name, age} = props
    return(
        <div>
            <p>{name} - Age : {age}</p>    
        </div>
    )
}

export default DeProps