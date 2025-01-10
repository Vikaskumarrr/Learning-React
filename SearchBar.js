
import { Button } from "antd";
import { useState } from "react";

const SearchBar = () => {
    const [value , setValue] = useState("");

    const onChange = (e)=>{ 
        setValue(e.target.value);
    }

    const seachImage = ()=>{ 
        // TODO LETTER
    }
    return (
        <div className="search-bar">
            <input placeholder="Search Images..."
            onChange={onChange}
            value={value}
            />
            <Button className="btn" onClick={seachImage}>Search</Button>
            
        </div>
    )
}; 

export default SearchBar ; 