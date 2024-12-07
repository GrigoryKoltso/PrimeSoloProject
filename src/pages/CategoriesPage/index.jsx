import React from 'react';
import CategoriesContainer from '../../components/CategoriesContainer';
import { useSelector } from 'react-redux';
const CategoriesPage = () => {

    const categoriesState = useSelector(store => store.categories)

    return (
        <div >
            <CategoriesContainer categories={categoriesState} />
        </div>
    );
};

export default CategoriesPage;