import React from 'react';
import { useSelector } from "react-redux";
import CategoryCard from '../CategoryCard';
import s from './index.module.scss'
const CategoriesContainer = ( {categories} ) => {

    return (
        <div className={`${s.catContainer} container`}>
            <h2>Categories</h2>
            <div>
                {
                    categories.map(el => <CategoryCard key={el.id} {...el}/>)
                }
            </div>
        </div>
    );
};

export default CategoriesContainer;