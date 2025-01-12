import { LOAD_PRODUCTS_BY_CATEGORY, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE } from "../actions/productsAction"
const initState = {
    data: [],
    loading: false,
    error: null
  };
  
  export const productsByCategoryReducer = (state = initState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true
        };
      case LOAD_PRODUCTS_BY_CATEGORY:
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  


