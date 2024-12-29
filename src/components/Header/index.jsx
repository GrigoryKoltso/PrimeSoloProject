
import React from 'react';
import s from './index.module.scss'
import mainLogo from '../../assets/Logos/mainLogo.svg'
import cartLogo from '../../assets/Logos/cart.svg'
import heartLogo from '../../assets/Logos/heart.svg'
import lightMode from '../../assets/Buttons/lightMode.svg'
import Navbar from '../Navbar';
import { Link } from 'react-router-dom'
const Header = () => {
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
                <img src={heartLogo} alt="heart" />
                <Link to='cart'>
                    <img src={cartLogo} alt="cart" />
                </Link>
            </div>
        </header>
    );
};

export default Header;


