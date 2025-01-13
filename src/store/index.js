import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsReducer } from './reducers/productsReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { cartReducer } from './reducers/cartReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { favoriteReducer } from './reducers/favoutiteReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
    productsByCategory: productsByCategoryReducer,
    favorite: favoriteReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

