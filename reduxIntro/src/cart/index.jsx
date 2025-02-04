import { Provider, useDispatch, useSelector } from "react-redux"
import store from "./store"


const Age = ()=>{ 
    
    const age = useSelector((state)=>{ 
        console.log(state);
        return state.age;
    })

    return (
        <div>
            <h3>age : {age}</h3>
        </div>
    )
}
    

    function Counter(){ 
        const dispatch = useDispatch();

        const inc = ()=>{ 
            dispatch({type : "inc_age"})
        }
    
    
    return (
    <div>
        {/* <h3>Age : {age}</h3> */}
        <button onClick={inc}>Incement age</button>
    </div>
    )
}



export const  Cart = ()=>{ 
    return (
        <Provider store={store}>
            <Age/>
            <Counter />
        </Provider>

    )
}



/**
 * react-redux 
 * 
 * <Provider store={store}>
 *          <Age />
 * <Provider />
 * 
 * useDispatch 
 * cosnt age =  useSelector((store)=> store.age)
 */