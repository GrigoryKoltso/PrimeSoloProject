import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure, loadSingleProductAction } from "../store/actions/productsAction";

const fetchFromApi = (url, dispatch, successAction, failureAction) => {
  dispatch(fetchProductsRequest());
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch');
      }
      return res.json();
    })
    .then((data) => {
      dispatch(successAction(data));
    })
    .catch((error) => {
      dispatch(failureAction(error.message));
    });
};

export const getAllProducts = (dispatch) => {
  fetchFromApi(
    'http://localhost:3333/products/all',
    dispatch,
    fetchProductsSuccess,
    fetchProductsFailure
  );
};

export const getSingleProduct = (id) => (dispatch) => {
  fetchFromApi(
    `http://localhost:3333/products/${id}`,
    dispatch,
    loadSingleProductAction,
    fetchProductsFailure
  );
};