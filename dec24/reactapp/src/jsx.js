/**
 * <button class="btn"> Click Me </button>
 */

import React from "react";
import { createRoot } from "react-dom/client"
const button = <button class="btn"> Click Me </button>

// Externded Markup language
// <button className="btn">Click Me></button> + Bable => React.creatElement();
// <tag>data</tag>

// const inputId = abc ; 
const name = "vikas";

const container =
  (
    <div>
      {/* <label htmlFor={inputId}>vikas </label>
    <input placeholder="email" id={inputId}/>  */}
      <p>
        {[
          "vikas",
          <b>{"Amit"}</b>,
          <span>{10 % 2 === 1 ? "vikas" : "Rahul"}</span>,
        ]}
      </p>
    </div>
  );



//  to embed data inside JSX we use {data}
// Booleans , null , undefined values will be displayed in the JSX
// Object are not valid react children. 
// Arrays can be rendered as a children to react elements. 

const app = createRoot(document.getElementById("root"));
const root = createRoot(app);
root.render(container)

