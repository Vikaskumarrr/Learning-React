// Event Listeners

// Components

import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

// const onClickBtn = ()=> console.log("click btn")

// const container = (
//     <>
//     <button onClick={onClickBtn}>Click Me</button>
//     </>
// )

// Component => Class component & Functional components

// A functional component is a javascript function which return jsx start with capital letter

const User = ({name, age})=>{ 
    return(
        <div>
            <p>name:{name}</p>
            <p>age:{age}</p>
        </div>
    )
}


root.render(<User name="vikas" age="23"/>);

// To distinguish between native htm tags and custom component,
// name and age are props
// User({name:"Vikas", age:"23"})=> <User />
// User({name:"Vikas", age:"23"})=> <User name="vikas" age="23"/>


