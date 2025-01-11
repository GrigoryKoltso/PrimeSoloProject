
import React from 'react';
import s from './index.module.scss'
import { useDispatch } from 'react-redux'
import { deleteFromCartAction, incrCartAction, decrCartAction } from '../../store/actions/cartActions';
import { VscClose } from "react-icons/vsc";
const CartItem = ({ id, title, price, discont_price, count, image }) => {

    const dispatch = useDispatch();
    console.log(discont_price);
    return (
        <div className={s.cart}>
            <img src={`http://localhost:3333${image}`} />
            <VscClose className={s.button_close} onClick={() => dispatch(deleteFromCartAction(id))} alt="x" />
            <div className={s.cart__content}>
                <h4>{title}</h4>
                <div className={s.cart__content__counter}>
                    <button onClick={() => dispatch(decrCartAction(id))}>
                        -
                    </button>
                    <div className={s.number}>
                        <p>{count}</p>
                    </div>

                    <button onClick={() => dispatch(incrCartAction(id))}>
                        +
                    </button>
                    <div className={s.price_container}>
                        {discont_price ? (
                            <>
                                <p className={s.old_price}>${(discont_price * count).toFixed(2)}</p>
                                <p className={s.new_price}>${(price * count).toFixed(2)}</p>
                            </>
                        ) : (
                            <p className={s.containerprice}>${(price * count).toFixed(2)}</p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CartItem;

