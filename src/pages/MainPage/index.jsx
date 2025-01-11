

import React from 'react';
import Banner from '../../components/Banner';
import DiscountForm from '../../components/DiscountForm';
import CategoriesContainer from '../../components/CategoriesContainer';
import SalesContainer from '../../components/SalesContainer';
import ProductCard from '../../components/ProductCard';
import ProductsContainer from '../../components/ProductsContainer';
import { useSelector } from 'react-redux';

const MainPage = () => {

    const categoriesState = useSelector(store => store.categories)
    const slicedCategories = categoriesState.slice(0, 4);

    return (
        <div className='mainPage'>
            <Banner/>
            <CategoriesContainer categories={slicedCategories}/>
            <DiscountForm/>
            <SalesContainer/>
        </div>
    );
};

export default MainPage;