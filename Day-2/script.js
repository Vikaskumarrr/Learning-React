/**
 *  React elements
 * DOM element
 */




// // DOM element
const btn = document.querySelector("#app");
const container  = ReactDOM.createRoot(btn);
// let element = document.createElement("div");
// element.innerText = "vikas";


// btn.appendChild(element)


// React element => these are the light weight repersentation of the actual DOM element

// Createelement(type, props, children)
// /* <b id="abc" class="xyz">Vikas</b> */
// const bold1 = React.createElement("b", {id: "abc" , className: "xyz"}, "vikas");
// debugger;
// // btn.appendChild(bold1);
// const container = ReactDOM.createRoot(btn);
// // container is wrapper element under which we can render the elements
// container.render(bold1);

/*
DOM Element                  | React Element
1.  These can be created       1 .These Element can be created by React
by  document API
2, These are the real element  2. These virtual(In memory) repersetation of the real dom elements.
which we see on the UI


ReactDOM is a bridge between the react and DOM

    
*/

// Create a subtree and append inside div#app by using React

/*
 <div id ="container">
     <p class="para">
         <b> Some Text <b>
     </p>
  </div>   
*/

// const bold = React.createElement("b", null, "Some Text") ;
// const para = React.createElement("p", {className: "para" }, bold);
// const span = React.createElement("span", null, "some span")
// const div = React.createElement("div", {id:"container"},"something ",para , span )    

// JSX  

// render method is from react-dom library this method takes a react element as an argument and converts
// a antive DOM element and then appends in the container .
// container.render(div);