import React from 'react';
import { useSelector } from "react-redux";
import CategoryCard from '../CategoryCard';
import s from './index.module.scss'
import { Link } from 'react-router-dom';
const CategoriesContainer = ( {categories} ) => {

    return (
        <div className={`${s.catContainer} container`}>
            <div className={s.cart_title}>
               <h2>Shopping cart</h2>
               <div>
                    <div className={s.border}></div>
                    <Link to="/categories">All categories</Link>
               </div>
            </div>
            <div>
                {
                    categories.map(el => <CategoryCard key={el.id} {...el}/>)
                }
            </div>
        </div>
    );
};

export default CategoriesContainer;