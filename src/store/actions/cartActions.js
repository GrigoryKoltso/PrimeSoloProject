
 export const ADD_TO_CART = 'ADD_TO_CART';
 export const DELETE_FROM_CART = 'DELETE_FROM_CART';
 export const INCR_CART = 'INCR_CART';
 export const DECR_CART = 'DECR_CART';
 export const CLEAR_CART = 'CLEAR_CART';

export const deleteFromCartAction = product_id => ({ type: DELETE_FROM_CART, payload: product_id });
export const incrCartAction = product_id => ({ type: INCR_CART, payload: product_id });
export const decrCartAction = product_id => ({ type: DECR_CART, payload: product_id });
export const clearCartAction = () => ({ type: CLEAR_CART });
export const addToCartAction = product => ({type: ADD_TO_CART, payload: product})