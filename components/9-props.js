import React from "react";

const Props = (details) => {
    return(
        <div>
            <p>{details.name} - Age : {details.age}</p>    
            {details.children}
        </div>
    )
}

export default Props