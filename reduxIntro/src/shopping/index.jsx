import { Provider } from "react-redux"
import store from "./store"
import { Product } from "./components/Product"
import { Cart } from "./components/Cart"


export const ShoppingApp = () => {
    return (
        <Provider store={store}>  
            <div>
                <Product />
               <Cart/>
            </div>
        </Provider>
    )
}