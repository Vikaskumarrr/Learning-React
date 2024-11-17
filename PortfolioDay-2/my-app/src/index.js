/**
 * <button class="btn">Click Me</button> 
 */

import React from "react";
import { createRoot } from "react-dom/client";

// const button = <button className="btn">Click Me</button>;
// extended markup language
// <tag>data</tag>
// <button className="btn">Click Me</button> + babel => React.createElement();

// JSX Syntex

// const inputLable = "Enter Name";
// const input = "email";
// const name = "Vikas";


const container = (
  <div id="container" className="abc xyg mno" >
    {/* <label htmlFor={input}>{inputLable}</label>
<input placeholder="email" id={input}/> */}
    <b>{[10,20,30]}</b>
  </div>
);

// to embed data inside the JSX we use {data}
// Boolean , null , undefined valueas will not be displayed in the JSX
// Object are not valid react children
//  Array can be rendered as a chldren to react element


const app = document.getElementById("root");
const root = createRoot(app);
root.render(container);

