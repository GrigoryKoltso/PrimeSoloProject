
import React from 'react';
import ProductsContainer from '../../components/ProductsContainer';
import { useSelector } from 'react-redux';
import s from './index.module.scss'
const AllProductsPage = () => {
    const allProductsState = useSelector(store => store.products)
    return (
        <div className={`${s.all_sales} app-container`}>
            <h2>All Products</h2>
            <ProductsContainer products={allProductsState.data}/>
        </div>
    );
};

export default AllProductsPage;