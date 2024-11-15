import React from "react";
import {createRoot} from "react-dom/client";

// const para = React.createElement('p', {id: "abc"}, "Para Element");
const para = (
<p id="abc">para
  <b>Bold text</b>
  <span>Span Element</span>
</p>
);

// The XML like code written inside javascript file is called as javascript XML (JSX)


const root = createRoot(document.getElementById("app"));

root.render(para);


// the code inside is combind in bundle.js and then that file will send to the browser;
//  <p id="abc">para</p>; + Babel => React.createElement('p', {id: "abc"}, "Para Element");