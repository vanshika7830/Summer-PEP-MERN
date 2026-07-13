import Child from "./Child"
function Parent(){
    return(
        <div style={{border: '1px solid red', padding: '10px'}}>
        <p>This is Parent</p>
        <Child/>
        </div>
    )
}
export default Parent