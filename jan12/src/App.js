/**
 * useRef hook 
 * 
 * Authorization app (realtime login & signup flow )
 */

// useref => creates an object in the frist render of the component and server the same object acess all other re render
// useRef do not consider the value passed from second render onwords 
// `useRef` do not consider the value passed from second render onwords 

// useState => useState can be used when the data is mutable and we need render for every change in the data 
// useRef => useRef can be used to single memory reference access multiple renderof the comonent. 




import { useRef, useState } from "react";

const arr = [];

function App() {
  const [count, setCount] = useState(10);
  let user = useRef({name : "vikas", age : 21})

  const incrementAge = ()=>{ 
    user.current.age++;
    console.log(user);
  }

  return (
    <div className="App"> 
    <p>
      Name: <b>{user.current.name}</b>
      Age: <b>{user.current.age}</b>
    </p>
      <h1>Count : {count}</h1> 
      <button onClick={ incrementAge()}>Incremrent Age</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )



}
export default App;