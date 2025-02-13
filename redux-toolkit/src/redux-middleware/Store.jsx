import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";


// redux-thunk => give us a middleware functionality for a redux store  
/**
 * By default function always takes action object as argument 
 * {type : "inc ", payload: optional}
 */


const initialState = { count: 10, value: 1 }

const counterReducer = function (state = initialState, action) {
    console.log("inside the counterreducer")
    if (action.type === "inc") {
        const incrementCount = action.payload
        return { count: state.count + incrementCount };
    }
    return state;



}

const cityReducer = (state = {info : null}, action)=>{
    console.log("inside the cityreducer")
    if(action.type === "fetched_data"){ 
        return {...state, info : action.payload};
    } 
    return state
}

const rootReducer = combineReducers({
    counter : counterReducer,
    city : cityReducer
})

const store = legacy_createStore( rootReducer ,composeWithDevTools(applyMiddleware(thunk)));

export default store; 