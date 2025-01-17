import { createContext, useContext, useState } from "react"
import "./App.css"

const CounterContext = createContext();



const A = () => {
    const {count , setCount} = useContext(CounterContext);
    const decrementCount = ()=>{ 
        setCount((p)=> p - 1);
    }
    return (
        <div className="box">
            <p>Insdie Component A</p>
            <button onClick={decrementCount}>Decrment</button>
        </div>
    )
}

const B = () => {
    const {count , setCount} = useContext(CounterContext);
    const incrementCount = ()=>{ 
        setCount((pre)=> pre + 1);
    }
return (
        <div className="box">
            <p>Insdie Component B </p>
            <p>Count = {count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    )
}


const App = () => {
    const [count, setCount] = useState(10);

    return (
        <CounterContext.Provider value={{count , setCount}}>
            <div className="box">
                <h1>Inside App Component</h1>
                <h2>Count = {count}</h2>
                <A />
                <B />
            </div>
        </CounterContext.Provider>

    )
}

export default App; 