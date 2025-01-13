
import { Button } from "antd";
import { useState } from "react";

const SearchBar = ({updateQuery ,defualtValue}) => {
    const [value , setValue] = useState(defualtValue);

    const onChange = (e)=>{ 
        setValue(e.target.value);
    }

    const seachImage = ()=>{ 
        updateQuery(value)
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
/**
  
 */