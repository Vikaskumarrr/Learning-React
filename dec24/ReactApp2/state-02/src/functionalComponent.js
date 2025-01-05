
import { useState } from "react";

// Using useState hook we can acheive the component state just as in class component
// Hook: A raect hook is plan javascript function which can be used only inside functional component or in other fucntion 
// React Hook by convention start with 'use'

// useState=>
// 1 can take a single argument which define the inital state of the component.
// 2 useState return an array of two element [stateValue, setterFunction]


// const FunctionalComponent = () => {


//     const [count , setCount ] = useState(10)
//     console.log(count)

//     const increment = () => {
//         setCount((prev)=>{ 
//             return  prev + 1 ;
//         })
//         setCount((prev)=>{ 
//             return prev + 2 ;
//         })
//     }
//     return (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={increment}>Increment</button>
//         </div>
//     )

// }
//

// Lazy intiallisation : we can pass a function as an argument to useState methods so that will ensure to call that callback during first render only

// function findSum(n = 1000) {

//     console.log("IN FINDSUM FUNCTION")
    
//     let sum = 0;
//     for (let i = 2; i <= n; i += 2) {
//         sum += i;
//     }
//     return sum ; 
// };

// function FunctionalComponent() {
//     const [count, setCount] = useState(findSum);

//     const increment = () => {
//         // setState method asyncronous in nature.
//         setCount(count + 1);
//         setCount(count + 2);
//     };

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={increment}>Increment state</button>
//         </div>
//     )

// }



function FunctionalComponent (){ 
    // non primitive as State values
    const [user, setUser] = useState({name:" Vikas " , age: 21});
    const incrementAge = ()=>{ 
        user.age ++ ;
        console.log(user);
        setUser({...user});
    }

    return (
        <div>
            <p>Name : {user.name}, Age: {user.age}</p>
            <button onClick={incrementAge}>Increment age</button>
        </div>
    )
}

export default FunctionalComponent; 