import { useSelector } from "react-redux";
import React from 'react';
import ProductCard from "../ProductCard";
import s from './index.module.scss'
const ProductsContainer = ( {products} ) => {
    
    return (
        <div className={ s.productsContainer} >
            {
                products.map(el => <ProductCard key={el.id} {...el}/>)
            }
        </div>
    );
};

export default ProductsContainer;



