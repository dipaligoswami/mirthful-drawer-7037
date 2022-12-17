import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./auth/reducer";
import thunk from "redux-thunk";
import { appReducer } from "./app/reducer";
import { cartReducer } from "./cart/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    cart: cartReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));

console.log('state', store.getState());

export default store;