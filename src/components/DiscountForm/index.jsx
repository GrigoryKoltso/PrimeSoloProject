import React from 'react';
import s from './index.module.scss'
import background from '../../assets/Banners/discount_form.svg'
import { Link } from "react-router-dom";
const DiscountForm = () => {
  return (
    <section className={`${s.discount} container`}>
      <h3>5% off on the first order</h3>
      <div className={s.discount__content}>
        <img src={background} alt="Hands with gardening tools" />
        <form >
          <label htmlFor="name">
            <input
              type="text"
              placeholder="Name"
            />
          </label>
          <label htmlFor="phone">
            <input
              type="text"
              placeholder="Phone number"
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              placeholder="Email"
            />
          </label>

          <button type="submit">
            <Link to="/sales" type="submit">
              Get a discount
            </Link>
          </button>
        </form>
      </div>
    </section>
  );
};

export default DiscountForm;