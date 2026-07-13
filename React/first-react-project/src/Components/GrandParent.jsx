import Parent from "./Parent"

function GrandParent(){
    return(
        <div style={{border: '1px solid grey', padding: '10px'}}>
            <p>This is Grand Parent</p>
            <Parent/>
        </div>
    )
}

export default GrandParent