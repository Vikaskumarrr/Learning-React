import { Link } from "react-router-dom";


const HomeScreen = () => {
    return (
        <div>
            <h1>Welcome to home screen </h1>
            <Link to={"/about"}>About page here</Link>            
        </div>
    )
}



export default HomeScreen ;