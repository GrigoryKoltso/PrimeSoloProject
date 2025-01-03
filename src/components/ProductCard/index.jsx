
import React from 'react';
import s from './index.module.scss'
import cart_white from './images/cart_white.svg'
import heart_white from './images/heart_white.svg'
import cart_green from './images/cart green.svg'
import heart_green from './images/heart green.svg'
import heart_dark from './images/heart_dark.svg'
import { Link } from "react-router-dom";
import { addToCartAction } from '../../store/actions/cartActions';
import { useDispatch } from 'react-redux';
const ProductCard = ({ id, title, image, price, discont_price }) => {

    const trimText = title.length > 25 ? title.slice(0, 21) + "..." : title;

    const dispatch = useDispatch();

    const discountPercentage = discont_price
        ? Math.round(((price - discont_price) / price) * 100)
        : null;

    return (
        <Link to={`/products/${id}`}>
            <div key={id} className={s.card}>
                <img src={`http://localhost:3333${image}`} alt={title} />
                <div className={s.add_to_cart} onClick={() => dispatch(addToCartAction({ id, image, title, price }))}>
                    Add to cart
                </div>
                <div>
                    <h3>{trimText}</h3>
                    <div className={s.icon_container}>
                        <img src={heart_white} className={s.icon} alt="to cart" />
                        <img src={cart_white} className={s.icon} alt="to cart" />
                    </div>


                    {discont_price && (
                        <div className={s.discount_info}>-{discountPercentage}%</div>
                    )}

                    {discont_price !== null ? (
                        <div>
                            <p className={s.def_price}>${discont_price}</p>
                            <p className={s.price}>{price}</p>
                        </div>
                    ) : (
                        <p className={s.def_price}>${price}</p>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;