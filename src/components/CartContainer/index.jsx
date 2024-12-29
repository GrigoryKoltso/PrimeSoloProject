
import React from 'react';
import { useSelector } from 'react-redux'
import CartItem from '../CartItem';
import s from './index.module.scss'
const CartContainer = () => {
    const cartState = useSelector(store => store.cart);
    return (
        <div className={`${s.cartContainer} container`}>
            {
                cartState.map(el => <CartItem key={el.id} {...el} />)
            }
        </div>
    );
};

export default CartContainer;