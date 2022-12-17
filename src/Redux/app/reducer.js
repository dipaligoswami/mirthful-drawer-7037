import { appActions } from "./action";


const initState = {
    loading: false,
    error: false,
    data: []
  };
  
  export const appReducer = (state = initState, action) => {
    switch (action.type) {
        case appActions.POST_REQUEST: {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        case appActions.POST_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        }
        case appActions.POST_FAILURE: {
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
  