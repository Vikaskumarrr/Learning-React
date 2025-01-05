import { useEffect, useState } from "react";
/**
 * Signature of useEffect
 * useEffect take two argument
 * 1. Callback funtion .
 * 2. Dependency List (optional).
 * useEffect do not return anything.
 */




const EffectExample = () => {
    const [count, setCount] = useState(10);
    useEffect(() => {
        console.log("some message")
    }, []);
    return (
        <div>
            <p>useEffect example</p>
            <h1>{count}</h1>
            <button onClick={() => setCount((p) => p + 1)}>Increment</button>
        </div>
    )

};

export default EffectExample;


/**
 * 
 MovieApp => making an API call
 Class Component

 componentDitMount

 ComponentDitUpdate
 Props/ State change
 componentWillMount

these above life cycle method can be acheived in functinal component as well
BY using a hook 'useEffect'  

 */
