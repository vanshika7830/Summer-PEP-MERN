import React from "react";
// const Child = React.memo((prop) => {
//     console.log("Child component rendered");

import GrandChild from "./GrandChild"

    
//     return(
//         <div>
//             <p>This is a Child Component - {prop.name}</p>
//         </div>
//     )
// })
// export default Child;


function Child(){
    return(
        <div style={{border: '1px solid green', padding: '10px'}}>
        <p>This is Child</p>
        <GrandChild />
        </div>
    )
}
export default Child