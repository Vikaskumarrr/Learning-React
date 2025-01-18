import { Link } from "react-router-dom"

export const editor = ()=>{ 
    return(
        <div>
            <h1>editor page</h1>
            <Link to={"/editor"} ></Link>            
        </div>
    )
}
