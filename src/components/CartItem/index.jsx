
import React from 'react';
import s from './index.module.scss'
import { useDispatch } from 'react-redux'
const CartItem = ({id, title, price, count, image}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <img src={image} alt={title} />
            <p>{ title }</p>
            <p>{count}</p>
        </div>
    );
};

export default CartItem;