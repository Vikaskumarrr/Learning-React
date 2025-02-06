import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const products = [
    {
        id: 223,
        name: "amul",
        price: 50,
        description: "500g",
        img: "amul.jpg",
    }, {
        id: 224,
        name: "bread",
        price: 30,
        description: "400g",
        img: "bread.avif",
    },
    {
        id: 225,
        name: "amul",
        price: 50,
        description: "500g",
        img: "vite.svg",
    }, {
        id: 226,
        name: "bread",
        price: 30,
        description: "400g",
        img: "bread.avif",
    }
]


const intialState = {
    products,
    cart: [],
    whislists: {},
}
function reducer(state = intialState, action) {
    switch( action.type){ 
        case "add_cart":{
            const productId = action.payload;
            
            let selectedProduct = null ; 
            return { 
                ...state,
                products : state.products.filter(product=>{ 
                    if(product.id === productId ){ 
                        selectedProduct = product;
                        selectedProduct.quantity = 1 ;
                        return false;
                    }
                    return true;
                }),

                cart : [...state.cart, selectedProduct]
            }
            // get product id and move that object and form the product the car
        }
        
        default:
            return state ;
    }
}

const store = createStore(reducer, composeWithDevTools())
export default store; 