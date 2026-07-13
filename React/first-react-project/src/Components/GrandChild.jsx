import { useContext, useState } from "react"
import {UserContext} from "../Context/UserContext"

function GrandChild(){
    const {name,setName} = useContext(UserContext)
    const [user, setUser] = useState(null)
    return(
        <div style={{border: '1px solid blue', padding: '10px'}}>
            <input type="text" onChange={(e) => setUser(e.target.value)} />
            <button onClick={() => setName(user)}>Add User</button>
        <p>This is Grand Child {name}</p>
        </div>
    )
}
export default GrandChild