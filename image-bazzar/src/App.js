import { ImagesList } from "./components/ImagesList";
import { Pagination } from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import "./styles/app.scss";

const App = ()=>{ 
    return (
        <div className="container">
            < SearchBar/>
            < ImagesList /> 
            < Pagination />
        </div>
    )
}

export default App ;


//seachBar | image | pegination
// Html 