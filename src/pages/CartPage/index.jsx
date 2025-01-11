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
        <div className={`${s.orderForm} container`}>
            <h2>Shopping cart</h2>
            <div>
                <CartContainer />
                {!isCartEmpty && <OrderForm />}
                {isCartEmpty && (
                    <>
                        <p> OOOPS! Your cart is empty.</p>
                        <Link to="/products">Вперед к покупкам</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartPage;

// {discont_price && (
//     <div className={s.discount_info}>-{discountPercentage}%</div>
// )}

// {discont_price !== null ? (
//     <div>
//         <p className={s.def_price}>${discont_price}</p>
//         <p className={s.price}>{price}</p>
//     </div>
// ) : (
//     <p className={s.def_price}>${price}</p>
// )}