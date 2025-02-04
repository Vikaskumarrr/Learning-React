
import { useState } from "react";
import store from "./store.jsx";
import { useEffect } from "react";

// redux indroduction 

const useSubscribe = (store, setState)=>{ 
    useEffect(()=>{ 
        store.subscribe(()=>{ 
            setState(store.getState());
        })
    }, []);
}



const Counter = ()=>{ 
    const state = useSubscribe() ; 
    // const [ state , setState ] = useState((store.getState()));

    const increment = ()=>{ 
        store.dispatch({ type : increment});
    };

    const decrement = ()=>{ 
        store.dispatch({ type : decrement });
    }

    useEffect(()=>{ 
        store.subscribe(()=>{ 
           console.log("inside the subscriber ");
        })
    }, []);


    return (
        <div>
            <h1>Counter</h1>
            {/* <h2>{state.count}</h2> */}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )

}



const App = ()=>{ 

    return (
        <div>

            <Counter />
        </div>
    )


};

export default App ; 


// 