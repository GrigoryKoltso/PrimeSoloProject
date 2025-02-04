import React from 'react';
import CartContainer from '../../components/CartContainer';
import { useSelector } from "react-redux";
import s from './index.module.scss'
import OrderForm from '../../components/OrderForm';
import { Link } from 'react-router-dom';
const CartPage = () => {

    const cartState = useSelector(store => store.cart);

    const isCartEmpty = cartState.length === 0;

    return (
        <div className="container">
            <div className={s.cart_title}>
               <h2>Shopping cart</h2>
               <div>
                    <div className={s.border}></div>
                    <Link to="/products">Back to the store</Link>
               </div>
            </div>
            <div className={s.orderForm}>
                <CartContainer />
                {!isCartEmpty && <OrderForm />}
            </div>
            {isCartEmpty && (
                <div className={s.emptyCart}>
                    <p>Looks like you have no items in your basket currently.</p>
                    <Link to="/products">Continue shopping</Link>
                </div>
            )}
        </div>
    );
    
};

export default CartPage;
