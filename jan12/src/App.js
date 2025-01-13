/**
 * useRef hook 
 * 
 * Authorization app (realtime login & signup flow )
 */


import { useState } from "react";

const arr = [];

function App() {
  const [count, setCount] = useState(10);
  let obj = { name: "vikas" };
  arr.push(obj);
  if (arr.length == 2) {
    console.log(arr[0] === arr[1]);
  }

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

    </div>
  )



}
export default App;