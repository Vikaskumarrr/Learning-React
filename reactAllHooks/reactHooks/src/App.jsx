import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count , setConut] = useState(window.screen.width);

  const currentScreenSize = ()=>{ 
      setConut(()=> window.innerWidth);
      return ()=>{ 
        window.removeEventListener("resize", currentScreenSize)
      }
  }


  useEffect(()=>{ 
    window.addEventListener("resize" ,currentScreenSize)
  })


  return (
    <>
      <div>
        <h1>This is the window size {count} </h1>
         </div>
    </>
  )
}

export default App
// revising all hooks 
/**
 * useState 
 * useeffect
 * Context API 
 * useContext 
 * useRef
 * useMemo
 */