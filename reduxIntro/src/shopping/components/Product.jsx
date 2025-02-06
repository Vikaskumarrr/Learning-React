import { useDispatch, useSelector } from "react-redux"; 
 


export const Product = () => {
    const products = useSelector((state) => state.products);
    console.log(products);
     
    const dispatch = useDispatch();

    const addToCard = (productsid)=>{ 
        dispatch({type : "add_cart", payload: productsid});
    }

    return (<>
        <div>
            {
                products.map((product) => {
                    return (
                        <div key={product.id} className="product-itmes">
                            <img src={product.image} alt={product.name} />
                            <b>{product.name}</b>
                            <p>{product.description}</p>
                            <span>{product.price}</span>
                            <button onClick={()=> addToCard(product.id)}>Add to cart</button>
                        </div>
                    )
                })
            }
        </div>
    </>)
}

