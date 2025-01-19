import { 
    FETCH_PRODUCTS_FAILURE, 
    FILTER_CHEAP_ALL_PRODUCTS, 
    FILTER_BY_PRICE, 
    SORT_PRODUCTS_BY_CATEGORY, 
    FETCH_PRODUCTS_REQUEST, 
    FETCH_PRODUCTS_SUCCESS 
} from "../actions/productsAction";

const initState = {
    data: [], // Основной массив продуктов
    loading: false, // Индикатор загрузки
    error: null // Ошибки при запросах
};

export const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                data: action.payload.map(product => ({
                    ...product,
                    visible: true, // Добавляем поле visible при загрузке
                })),
                loading: false,
                error: null,
            };

        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case SORT_PRODUCTS_BY_CATEGORY: {
            let sortedData = [...state.data];
            switch (action.payload) {
                case "price_asc":
                    sortedData.sort((a, b) => a.price - b.price);
                    break;
                case "price_desc":
                    sortedData.sort((a, b) => b.price - a.price);
                    break;
                case "title":
                    sortedData.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                default:
                    break;
            }
            return {
                ...state,
                data: sortedData,
            };
        }

        case FILTER_BY_PRICE: {
            const { minValue, maxValue } = action.payload;

            const filteredData = state.data.map(product => ({
                ...product,
                visible: product.price >= minValue && product.price <= maxValue,
            }));

            return {
                ...state,
                data: filteredData,
            };
        }

        case FILTER_CHEAP_ALL_PRODUCTS: {
            if (action.payload) {
                const filteredData = state.data.map(product => ({
                    ...product,
                    visible: product.price <= 50,
                }));
                return {
                    ...state,
                    data: filteredData,
                };
            } else {
                const resetData = state.data.map(product => ({
                    ...product,
                    visible: true,
                }));
                return {
                    ...state,
                    data: resetData,
                };
            }
        }

        default:
            return state;
    }
};

