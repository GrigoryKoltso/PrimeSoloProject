
import React from 'react';
import { getAllProducts } from '../../requests/products';
import { useSelector } from 'react-redux';
import s from './index.module.scss'
import ProductCard from './../ProductCard/index';
import ProductsContainer from '../ProductsContainer';

const Sale = () => {

    const productsState = useSelector((store) => store.products);

    const discountedProducts = productsState.data
        .filter((product) => product.discont_price)
        .sort((a, b) => a.discont_price - b.discont_price); 
    return (
        <section >
            <ProductsContainer products={discountedProducts.slice(0, 4)} />
        </section>
    );
};

export default Sale;

