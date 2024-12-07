import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } from "../store/actions/productsAction";

export const getAllProducts = (dispatch) => {
    dispatch(fetchProductsRequest());
    fetch('http://localhost:3333/products/all')
    .then((res) => {
        if(!res.ok) {
            throw new Error('Failed to fetch products')
        }
        return res.json();
    })
    .then((data) => {
        dispatch(fetchProductsSuccess(data))
    })
    .catch((error) => {
        dispatch(fetchProductsFailure(error.message))
    })
}