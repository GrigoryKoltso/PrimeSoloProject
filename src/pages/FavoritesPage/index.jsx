
import { useSelector } from 'react-redux';
import ProductsContainer from '../../components/ProductsContainer';
import { Link } from 'react-router-dom';
import s from './index.module.scss'
const FavoritesPage = () => {

    const favoriteState = useSelector(store => store.favorite);
    console.log(favoriteState);
    
    return (
        <div className={`${s.favoritePage} container`}>
            <div className={s.cart_title}>
               <h2>Liked products</h2>
               <div>
                    <div className={s.border}></div>
                    <Link to="/products">Back to the store</Link>
               </div>
            </div>

            {
                favoriteState.length === 0 
                ? <div className={s.emptyFavourite}>
                <p>Looks like you have no items in your basket currently.</p>
                <Link to="/products">Continue shopping</Link>
            </div>
                : <ProductsContainer products={favoriteState}/>
            }

        </div>
    );
};

export default FavoritesPage;