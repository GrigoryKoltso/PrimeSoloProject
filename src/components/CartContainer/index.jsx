
import { useSelector } from 'react-redux'
import CartItem from '../CartItem';
import s from './index.module.scss'
const CartContainer = () => {
    const cartState = useSelector(store => store.cart);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxHeight: cartState.length > 3 ? '582px' : 'auto', // Ограничиваем высоту, если больше 3 элементов
        overflowY: cartState.length > 3 ? 'auto' : 'visible', // Включаем прокрутку
        marginRight: '30px'
    };

    return (
        <div style={containerStyle} className={s.cartContainer}>
            {cartState.map(el => <CartItem key={el.id} {...el} />)}
        </div>
    );
};

export default CartContainer;