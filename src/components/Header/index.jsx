

import s from './index.module.scss'
import mainLogo from '../../assets/Logos/mainLogo.svg'
import cartLogo from '../../assets/Logos/cart.svg'
import heartLogo from '../../assets/Logos/heart.svg'
import lightMode from '../../assets/Buttons/lightMode.svg'
import Navbar from '../Navbar';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState } from 'react'
const Header = () => {

    const cartState = useSelector(store => store.cart);
    const cartCount = cartState.reduce((acc, el) => acc + el.count, 0);

    const favoriteState = useSelector(store => store.favorite);
    const favoriteCount = favoriteState.length

    const [burgerActive, setBurgerActive] = useState(false); // состояние для бургера

    const handleBurgerClick = () => {
        setBurgerActive((prev) => !prev); // переключаем состояние бургера
    };

    return (
        <header className={`${s.header} app-container`}>
            <div className={s.header__leftIcons}>
                <img src={mainLogo} alt="our logo" />
                <button>
                    <img src={lightMode} alt="" />
                </button>
            </div>

            <Navbar />

            <div className={`${s.navList} ${burgerActive ? s.active : ""}`}>
                <div className={s.header__menu}>
                    <Link to="/">Main Page</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/products">All products</Link>
                    <Link to="/sales">All sales</Link>
                </div>
            </div>

            <div
                className={`${s.header__burger} ${burgerActive ? s.active : ""}`}
                onClick={handleBurgerClick}
            >
                <span className={s.line}></span>
                <span className={s.line}></span>
                <span className={s.line}></span>
            </div>

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


