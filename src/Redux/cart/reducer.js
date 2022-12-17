import { cartActions } from "./action";


const initState = {
    loading: false,
    error: false,
    data: []
  };
  
  export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case cartActions.GET_CART_REQUEST: {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        case cartActions.GET_CART_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        }
        case cartActions.GET_CART_FAILURE: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        default:
            return state;
    }
  };
  