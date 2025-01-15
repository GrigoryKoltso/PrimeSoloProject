import { ADD_TO_FAVORITE } from "../actions/productsAction";

const checkFavourite = (state, payload) => {

    const targetProduct = state.find(el => el.id === payload.id)

    if(targetProduct) {
        return state.filter(el => el.id !== targetProduct.id)
    }else {
        return [...state, payload]
    }
}

const currentFavorite = JSON.parse(localStorage.getItem('favourite')) || [];

export const favoriteReducer = (state=currentFavorite, action) => {
    if(action.type === ADD_TO_FAVORITE){
        return checkFavourite(state, action.payload)
    }
    return state
}

