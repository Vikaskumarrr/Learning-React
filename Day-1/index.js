/**
 * React elemnet
 * DOM element
 */


// const bold = document.createElement("b");
// // bold is a object (DOM ELEMENT);
// bold.id = "abc";
// bold.className = "xyz";
// bold.innerText = "Vikas";

// console.log({bold});

// const app = document.getElementById("app");
// app.appendChild(bold)

const bold1 = React.createElement(
    "b", 
    {id: "abc"},
    "vikas"                 
)

// React element => those are ther light weight repersentasion of the DOM Element
// <b id="abc" class="xyz">Vikas</b>



const container = ReactDOM.createRoot(app);

// container.render(bold1);

const span = React.createElement("span",{id: "span"}, "Some Text")
const div = React.createElement("div", {id:"div-1"}, span)

/**
 * DOM Element                 ||React ELement
 * 1. These can be created    1. These element can be created y React
 * by document API 
 * 
 * 2. these are real element    2. 
 *                              
 */

// JSX 

// reander meathod is from react-dom-liberey this method take a element a reat element as an argument and convert tha a native DOM element and then appends in the contaienr. 


container.render(div);