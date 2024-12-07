import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "../actions/productsAction";

const initState = {
    data: [],
    loading: false,
    error: null
}

export const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
       case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }

}


