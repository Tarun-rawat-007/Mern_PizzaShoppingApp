import Product from "./Product";

export const Products = ({products}) =>{
    console.log("All products are:",products);
    return (
        <>{products.map(product=><Product key={product['_id']}  product={product}></Product>)}</>
    );
}