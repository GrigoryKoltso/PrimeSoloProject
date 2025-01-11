import React from 'react';
import { getAllProducts } from '../../requests/products';
import { useSelector } from 'react-redux';
import ProductsContainer from '../../components/ProductsContainer';
import s from './index.module.scss'
const AllSalesPage = () => {

    const productsState = useSelector((store) => store.products);

    const discountedProducts = productsState.data.filter((product) => product.discont_price)
    return (
        <section className={`${s.sales} container`}>
            <h2>Discounted items</h2>
            <ProductsContainer products={discountedProducts} />
        </section>
    );
};

export default AllSalesPage;