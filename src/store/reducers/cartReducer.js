import { ADD_TO_CART, DELETE_FROM_CART, INCR_CART, DECR_CART, CLEAR_CART } from "../actions/cartActions"

const checkProduct = (state, payload) => {
    
    const targetProduct = state.find(el => el.id === payload.id);

    if(targetProduct){
        if(!payload.count){
            targetProduct.count++
            return [...state]
        } else {
            targetProduct.count += payload.count
            return [...state]
        }
    } else {
        if(!payload.count){
            return [...state, {...payload, count: 1}]
        } else {
            return [...state, payload]
        }
    }
}

const currentCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

export const cartReducer = (state=currentCart, action) => {
    if(action.type === ADD_TO_CART){
        return checkProduct(state, action.payload)
    } else if(action.type === DELETE_FROM_CART){
        return state.filter(el => el.id !== action.payload)
    } else if(action.type === INCR_CART){
        const targetProduct = state.find(el => el.id === action.payload);
        targetProduct.count++;
        return [...state]
    } else if (action.type === DECR_CART){
        const targetProduct = state.find(el => el.id === action.payload);

        if(targetProduct.count === 1) {
            return state.filter(el => el.id !== action.payload)
        } else {
            targetProduct.count--;
            return [...state]
        }
        
    } else if(action.type === CLEAR_CART) {
        return []
    }
    return state
}

