import React from 'react';
import s from './index.module.scss';
import cart_white from './images/cart_white.svg';
import heart_white from './images/heart_white.svg';
import cart_green from './images/cart green.svg';
import heart_green from './images/heart green.svg';
import { Link } from 'react-router-dom';
import { addToCartAction, deleteFromCartAction } from '../../store/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = ({ id, title, image, price, discont_price }) => {
    const trimText = title.length > 25 ? title.slice(0, 21) + '...' : title;
    const dispatch = useDispatch();

    const cartState = useSelector((store) => store.cart);
    const isInCart = cartState.find((el) => el.id === id);

    const cartAction = (e) => {
        e.preventDefault(); // Предотвращает переход по ссылке
        dispatch(isInCart ? deleteFromCartAction(id) : addToCartAction({ id, image, title, price }));
    };

    const discountPercentage = discont_price
        ? Math.round(((price - discont_price) / price) * 100)
        : null;

    return (
        <Link
            to={`/products/${id}`}
            className={s.cardLink}
            onClick={(e) => {
                // Остановить переход по ссылке, если клик по иконке
                if (e.target.closest(`.${s.icon}`)) {
                    e.preventDefault();
                }
            }}
        >
            <div key={id} className={s.card}>
                <img src={`http://localhost:3333${image}`} alt={title} />

                <div onClick={cartAction} className={s.add_to_cart}>Add to Cart</div>

                <div>
                    <h3>{trimText}</h3>
                    <div className={s.icon_container}>
                        <img
                            src={heart_white}
                            className={s.icon}
                            alt="to wishlist"
                        />
                        <img
                            src={isInCart ? cart_green : cart_white} // Меняем иконку в зависимости от состояния
                            className={`${s.icon} ${isInCart ? s.inCart : ''}`}
                            alt="to cart"
                            onClick={cartAction} // Добавить или удалить товар
                        />
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
