

import React from 'react';
import s from './index.module.scss'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className={s.navbar}>
            <Link className={s.day__offer} >1 day discount!</Link>
            <ul className={s.nav}>
                <li><NavLink to="/" className={s.nav__item}>MainPage</NavLink></li>
                <li><NavLink to="/categories" className={s.nav__item}>Categories</NavLink></li>
                <li><NavLink to="/products" className={s.nav__item}>All Products</NavLink></li>
                <li><NavLink to="/sales" className={s.nav__item}>All Sales</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;