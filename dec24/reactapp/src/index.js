// Event Listeners
// Components

import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const onClickBtn = ()=>{ 
    alert("Clicked on Button");
}

const container = (
   <>
   <div>container 1</div>
   <div>container 1</div>
    <button 
    onClick={onClickBtn} 
    onMouseEnter={()=> console.log("mouse enter")}
    >
    Click me</button>
   </>
);

 /// component => Class components & functional Components 

 //  A functional Components is a javascript function which return jsx ans Starts with the capital letter 

 const User = (name, age )=>{ 
    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
        </div>
    )
 }

root.render(User('vikas bhandari')); 


// to distinguish between native html tags and custom components
// user({name:"viaks ", age: 45}) => ,user name="vikas" age="45" />


