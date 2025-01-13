
import React from 'react';
import s from './index.module.scss'
import mainLogo from '../../assets/Logos/mainLogo.svg'
import cartLogo from '../../assets/Logos/cart.svg'
import heartLogo from '../../assets/Logos/heart.svg'
import lightMode from '../../assets/Buttons/lightMode.svg'
import Navbar from '../Navbar';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Header = () => {

    const cartState = useSelector(store => store.cart);
    const cartCount = cartState.reduce((acc, el) => acc + el.count, 0);

    const favoriteState = useSelector(store => store.favorite);
    const favoriteCount = favoriteState.length

    return (
        <header className={`${s.header} app-container`}>
            <div className={s.header__leftIcons}>
                <img src={mainLogo} alt="our logo" />
                <button>
                    <img src={lightMode} alt="" />
                </button>
            </div>

            <Navbar />

            <div className={s.header__rightIcons}>
                <Link to='/favorites'>
                    <img className={s.icon} src={heartLogo} alt="heart" />
                    {
                        favoriteCount !== 0 && <span>{favoriteCount}</span>
                    }
                </Link>
                <Link to='cart'>
                    <img src={cartLogo} alt="cart" />
                    {
                        cartCount !== 0 && <span>{cartCount}</span>
                    }
                </Link>
            </div>
        </header>
    );
};

export default Header;


