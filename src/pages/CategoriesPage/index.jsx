import React from 'react';
import CategoriesContainer from '../../components/CategoriesContainer';
import { useSelector } from 'react-redux';
const CategoriesPage = () => {

    const categoriesState = useSelector(store => store.categories)

    return (
        <div className='app-container'>
            <CategoriesContainer categories={categoriesState} />
        </div>
    );
};

export default CategoriesPage;