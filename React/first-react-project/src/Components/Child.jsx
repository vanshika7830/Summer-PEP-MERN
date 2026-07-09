import React from "react";
const Child = React.memo((prop) => {
    console.log("Child component rendered");
    
    return(
        <div>
            <p>This is a Child Component - {prop.name}</p>
        </div>
    )
})
export default Child;