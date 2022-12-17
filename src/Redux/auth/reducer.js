import { authActions } from "./action";

const initState = {
    loading: false,
    isAuth: false,
    error: false,
    token: null
  };
  
  export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case authActions.AUTH_REQUEST: {
            return {
                ...state,
                loading: true,
                error: false,
                isAuth: false,
            };
        }
        case authActions.AUTH_SUCCESS: {
            return {
                ...state,
                loading: false,
                isAuth: true,
                token: action.payload
            };
        }
        case authActions.AUTH_FAILURE: {
            return {
                ...state,
                loading: false,
                isAuth: false,
                error: true
            }
        }
        default:
            return state;
    }
  };
  