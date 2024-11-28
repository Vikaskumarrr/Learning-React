import React from "react";
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById("app"));
const para = React.createElement(
    "para",
    {id: "abc", className: "xyz"},
    "Some text inside paragrph"

);

root.render(para);

// in this file 
// developer code + React code  + ReactDOM code 