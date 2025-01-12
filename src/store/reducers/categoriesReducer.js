const LOAD_ALL_CATEGORIES = "LOAD_ALL_CATEGORIES";
const LOAD_PRODUCTS_BY_CATEGORY = 'LOAD_PRODUCTS_BY_CATEGORY';



export const loadAllCategoriesAction = categories => ({
  type: LOAD_ALL_CATEGORIES,
  payload: categories
});

export const categoriesReducer = (state = [], action) => {
  if (action.type === LOAD_ALL_CATEGORIES) {
    return action.payload;
  }
  return state;
};

