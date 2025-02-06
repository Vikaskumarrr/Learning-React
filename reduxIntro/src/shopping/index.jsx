import { Provider } from "react-redux"
import store from "./store"
import { Product } from "./components/Product"


export const ShoppingApp = () => {
    return (
        <Provider store={store}>  
            <div>
                <Product />
               
            </div>
        </Provider>
    )
}