// since we install React and ReactDOM libraries we use the variables we use the variable exproted fron these liberries in our oroject

import React from "react";
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("app"))
const para = React.createElement(
    "p",{id: "abc"},
    "Some random text !!!"
);

root.render(para);

// In this file 
// delevloper code + react code + reactDOM code = bundle.js
// then we can include bundle.js inside index.html




 