
import React from 'react';
import ProductsContainer from '../../components/ProductsContainer';
import { useSelector } from 'react-redux';

const AllProductsPage = () => {
    const allProductsState = useSelector(store => store.products)
    return (
        <div className='app-container'>
            <ProductsContainer products={allProductsState.data}/>
        </div>
    );
};

export default AllProductsPage;