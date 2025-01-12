import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from '../../requests/products';
import { incrProductCountAction, decrProductCountAction } from '../../store/actions/productsAction';
import s from './index.module.scss'
import { addToCartAction } from '../../store/actions/cartActions';
const SingleProductPage = () => {

    const singleProductState = useSelector(store => store.singleProduct);

    const { id, title, description, price, image, categoryId, discont_price, count } = singleProductState

    const discountPercentage = discont_price
        ? Math.round(((price - discont_price) / price) * 100)
        : null;

    const { product_id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSingleProduct(product_id))
    }, [])


    return (
        <div className={`${s.singleProduct} container`}>
            <img src={`http://localhost:3333${image}`} alt="" />
            <div className={s.singleProduct__content}>

                <h3>{title}</h3>
                {discont_price !== null ? (
                    <div className={s.price_container}>
                        <p className={s.def_price}>${discont_price}</p>
                        <p className={s.price}>${price}</p>
                        {discont_price && (
                            <div className={s.discount_info}>-{discountPercentage}%</div>
                        )}
                    </div>
                ) : (
                    <p className={s.def_price}>${price}</p>
                )}

                <div className={s.button_container}>
                    <div>
                        <div className={s.number} onClick={() => dispatch(decrProductCountAction())}>
                            -
                        </div>
                        <p>{count}</p>
                        <div className={s.number} onClick={() => dispatch(incrProductCountAction())}>
                            +
                        </div>
                    </div>

                    <div onClick={() => dispatch(addToCartAction({ id, title, price, image, count }))}>
                        Add to cart
                    </div>
                </div>

                <p className={s.description}>{description}</p>
            </div>
        </div>
    );
};

export default SingleProductPage;