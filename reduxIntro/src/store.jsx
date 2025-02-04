// create store 

import { legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

/**
 * 1. action : its a plan javascript object . {type: "do_something"}
 * 2. reducer : its a plain javascript function that takes two arguments previosState and action then return the updated state.
 * 3. subscriber : its a plain javscipt functino that will get executed whenever there a change in the "state".
 * 
 */

const reducer = function (state = { count: 10 }, action) {
    if (action.type === "increment") {
        return { count: state.count + 1 };
    }
    if (action.type === "decrement") {
        return { count: state.count - 1 }
    }
    return state;
}

const store = legacy_createStore(reducer, composeWithDevTools());
 // for every 
// console.log(store);

// store.subscribe(()=>{ 
//     console.log("inside the subscriber 1")
// })


// console.log(store.getState());
// store.dispatch({ type: "increment" });
// console.log(store.getState());
// store.dispatch({ type: "decrement" });
// console.log(store.getState());




export default store;