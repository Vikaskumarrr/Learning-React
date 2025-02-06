import { useSelector } from "react-redux";
import "../styles/cart.scss"

export const Cart = ()=>{ 
    const products = useSelector((state) => state.cart);

    
    
    return (
        <>
        <h2>Cart</h2>
        <div>
            {products.map((product)=>{ 
                return ( 
                    <div key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div>
                            <b>{product.name}</b>
                            <p>{product.desciption}</p>
                            <span>{product.price}</span>
                        </div>
                        <div className="modifier">
                            <button>-</button>
                            <span>{product.quantity}</span>
                            <button>+</button>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}