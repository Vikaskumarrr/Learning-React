// react-redux 
import { createContext, useContext } from "react";
import store from "./store";

// store = {dispatch : f , subscribe : f, getState : f}



const ReduxContext = createContext();

const Age = ()=>{ 
    console.log("inside age component")
    const {getState} = useContext(ReduxContext);
    return (
        <div>
            <h3>{getState().age}</h3>
        </div>
    )
}



export const Cart = () =>{ 
    return (
        <ReduxContext.Provider value={store}>
                <AdeleteItemge />
        </ReduxContext.Provider>
    )
};