import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


const initalState = { 
   count : 10,
   age : 21,
}

const reducer  = (state = initalState, action)=>{ 
    switch(action.type){ 
        case  "inc_age" : { 
            return {...state, age: state.age + 1}
        }
    }
    return  state
}


const store = createStore(reducer , composeWithDevTools());
export default store ; 

