import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {
    const {products} = useLoaderData()
    console.log(products)
    return (
        <div>
            <h3>Products:{products.length}</h3>
            <div className="grid grid-cols-3 place-items-center gap-5">
                {

                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;