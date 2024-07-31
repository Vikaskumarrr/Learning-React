


import { sum } from "./test.js"

console.log(sum(12, 34));

import { addNameUnderApp } from "./addName.js"

const button = document.querySelector("#btn")
button.addEventListener("click", () => {
    addNameUnderApp("vikas")
})


console.log(React);
console.log(ReactDOM)

button.addEventListener("click", ()=>{ 
    // to create HTML element document.createElement();
    // to create React element React.createElement();
    const element = React.createElement(
        "p",
         {id: "abc", className: "xyz"},
         "vikas" 
        );
   const root = ReactDOM.createRoot(document.getElementById("app"));
   root.render(element);
});

console.log(React);




