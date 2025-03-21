import React from 'react';
import s from './index.module.scss';
import cart_white from './images/cart_white.svg';
import heart_white from './images/heart_white.svg';
import cart_green from './images/cart green.svg';
import heart_green from './images/heart green.svg';
import { Link } from 'react-router-dom';
import { addToCartAction, deleteFromCartAction } from '../../store/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavoriteAction } from '../../store/actions/productsAction';

const ProductCard = ({ id, title, image, price, discont_price }) => {
    const trimText = title.length > 25 ? title.slice(0, 21) + '...' : title;
    const dispatch = useDispatch();

    const favoriteState = useSelector((store) => store.favorite);
    const cartState = useSelector((store) => store.cart);
    const isInCart = cartState.find((el) => el.id === id);
    const isInFavorite = favoriteState.find((el) => el.id === id);

    const cartAction = (e) => {
        e.preventDefault();
        dispatch(isInCart ? deleteFromCartAction(id) : addToCartAction({ id, image, title, price }));
    };

    const buttonToCartAction = (e) => {
        e.preventDefault();
        dispatch(addToCartAction({ id, image, title, price }));
    };

    const favoriteAction = (e) => {
        e.preventDefault();
        dispatch(addToFavoriteAction({ id, image, title, price }));
    };

    const discountPercentage = discont_price
        ? Math.round(((price - discont_price) / price) * 100)
        : null;

    const formatPrice = (price) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

    return (
        <Link
            to={`/products/${id}`}
            className={s.cardLink}
            onClick={(e) => {
                if (e.target.closest(`.${s.icon}`)) {
                    e.preventDefault();
                }
            }}
        >
            <div className={s.card}>
                <img src={`http://localhost:3333${image}`} alt={title} />

                <div onClick={buttonToCartAction} className={s.add_to_cart}>Add to Cart</div>

                <div>
                    <h3>{trimText}</h3>
                    <div className={s.icon_container}>
                        <img
                            src={isInFavorite ? heart_green : heart_white}
                            className={s.icon}
                            alt="to wishlist"
                            onClick={favoriteAction}
                        />
                        <img
                            src={isInCart ? cart_green : cart_white}
                            className={`${s.icon} ${isInCart ? s.inCart : ''}`}
                            alt="to cart"
                            onClick={cartAction}
                        />
                    </div>

                    {discont_price && (
                        <div className={s.discount_info}>-{discountPercentage}%</div>
                    )}

                    <div>
                        <p className={s.def_price}>{formatPrice(discont_price || price)}</p>
                        {discont_price && <p className={s.price}>{formatPrice(price)}</p>}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
