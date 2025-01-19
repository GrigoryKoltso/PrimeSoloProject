
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'
export const LOAD_SINGLE_PRODUCT = "LOAD_SINGLE_PRODUCT";
export const INCR_PRODUCT_COUNT = 'INCR_PRODUCT_COUNT';
export const DECR_PRODUCT_COUNT = 'DECR_PRODUCT_COUNT';
export const CHANGE_STATUS_SINGLE_PRODUCT = 'CHANGE_STATUS_SINGLE_PRODUCT';
export const LOAD_PRODUCTS_BY_CATEGORY = 'LOAD_PRODUCTS_BY_CATEGORY';
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const SORT_PRODUCTS_BY_CATEGORY = 'SORT_PRODUCTS_BY_CATEGORY';
export const FILTER_BY_PRICE = 'FILTER_BY_PRICE';
export const FILTER_CHEAP_ALL_PRODUCTS = 'FILTER_CHEAP_ALL_PRODUCTS';

export const filterCheapAllProductsAction = value => ({ type: FILTER_CHEAP_ALL_PRODUCTS, payload: value });

export const filterByPriceAction = values => ({ type: FILTER_BY_PRICE, payload: values });

export const sortProductsByCategoryAction = value => ({ type: SORT_PRODUCTS_BY_CATEGORY, payload: value });

export const changeStatusSingleProductAction = () => ({ type: CHANGE_STATUS_SINGLE_PRODUCT });

export const fetchProductsRequest = () => ({type: FETCH_PRODUCTS_REQUEST})

export const fetchProductsSuccess = products => ({type: FETCH_PRODUCTS_SUCCESS,payload: products})

export const fetchProductsFailure = error => ({type: FETCH_PRODUCTS_FAILURE,payload: error})

export const loadSingleProductAction = (product) => ({type: LOAD_SINGLE_PRODUCT,payload: product});

export const incrProductCountAction = () => ({ type: INCR_PRODUCT_COUNT });
export const decrProductCountAction = () => ({ type: DECR_PRODUCT_COUNT });

export const loadProductsByCategoryAction = products => ({ type: LOAD_PRODUCTS_BY_CATEGORY, payload: products });

export const addToFavoriteAction = product => ({ type: ADD_TO_FAVORITE, payload: product });
