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




import { useEffect, useRef, useState } from "react";

const arr = [];

function App() {
  const [count, setCount] = useState(10);
  let user = useRef({name : "vikas", age : 21})
  const  btnRef = useRef(null)

  const incrementAge = ()=>{ 
    user.current.age++;
    console.log(user);
  }

  useEffect(()=>{
    console.log(btnRef);
    btnRef.current.innerText = "Coustom Text";
   },[])

  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}> 
      <p style={{
        fontSize: '1.2rem',
        margin: '1rem 0'
      }}>
        Name: <b style={{color: '#2c3e50'}}>{user.current.name}</b>{' '}
        Age: <b style={{color: '#2c3e50'}}>{user.current.age}</b>
      </p>
      <h1 style={{
        color: '#34495e',
        marginBottom: '1.5rem'
      }}>Count : {count}</h1> 
      <div style={{
        display: 'flex',
        gap: '1rem'
      }}>
        <button 
          ref={btnRef}
          onClick={incrementAge}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
        >
          Increment Age
        </button>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#2ecc71',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
        >
          Increment
        </button>
      </div>
    </div>
  )



}
export default App;