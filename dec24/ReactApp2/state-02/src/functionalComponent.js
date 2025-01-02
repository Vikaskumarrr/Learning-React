
import { useState } from "react";

// Using useState hook we can acheive the component state just as in class component
// Hook: A raect hook is plan javascript function which can be used only inside functional component or in other fucntion 
// React Hook by convention start with 'use'

// useState=>
// 1 can take a single argument which define the inital state of the component.
// 2 useState return an array of two element [stateValue, setterFunction]


const FunctionalComponent = () => {
    
    
    const [count , setCount ] = useState(10)
    console.log(count)

    const increment = () => {
        setCount((prev)=>{ 
            return  prev + 1 ;
        })
        setCount((prev)=>{ 
            return prev + 2 ;
        })
    }
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )

}

export default FunctionalComponent; 