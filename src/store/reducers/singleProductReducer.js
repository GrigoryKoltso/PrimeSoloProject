import { CHANGE_STATUS_SINGLE_PRODUCT, DECR_PRODUCT_COUNT, INCR_PRODUCT_COUNT, LOAD_SINGLE_PRODUCT } from "../actions/productsAction";
import { incrProductCountAction } from "../actions/productsAction";
import { decrProductCountAction } from "../actions/productsAction";
import { changeStatusSingleProductAction } from "../actions/productsAction";
const defaultState = {
  state: {},
  status: 'loading'
}


export const singleProductReducer = (state = defaultState, action) => {
  switch (action.type) {
      case LOAD_SINGLE_PRODUCT:
          return {
              ...action.payload[0], 
              count: 1,            
              status: 'ready'      
          };

      case CHANGE_STATUS_SINGLE_PRODUCT:
          return defaultState; 

      case INCR_PRODUCT_COUNT:
          return {
              ...state,
              count: state.count + 1 
          };

      case DECR_PRODUCT_COUNT:
          return {
              ...state,
              count: state.count > 1 ? state.count - 1 : 1 
          };

      default:
          return state;
  }
};

