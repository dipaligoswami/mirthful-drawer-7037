import axios from "axios";

export const cartActions = {
    ADD_TOCART_REQUEST: "ADD_TOCART_REQUEST",
    ADD_TOCART_SUCCESS: "ADD_TOCART_SUCCESS",
    ADD_TOCART_FAILURE: "ADD_TOCART_FAILURE",
    GET_CART_REQUEST: "GET_CART_REQUEST",
    GET_CART_SUCCESS: "GET_CART_SUCCESS",
    GET_CART_FAILURE: "GET_CART_FAILURE",
    PATCH_CART_REQUEST: "PATCH_CART_REQUEST",
    PATCH_CART_SUCCESS: "PATCH_CART_SUCCESS",
    PATCH_CART_FAILURE: "PATCH_CART_FAILURE",
    DELETE_ITEM_REQUEST: "DELETE_ITEM_REQUEST",
    DELETE_ITEM_SUCCESS: "DELETE_ITEM_SUCCESS",
    DELETE_ITEM_FAILURE: "DELETE_ITEM_FAILURE"
}

export const addToCartRequest = () => ({
    type: cartActions.ADD_TOCART_REQUEST
  });
  
export const addToCartSuccess = (data) => ({
type: cartActions.ADD_TOCART_SUCCESS,
payload: data
});

export const addToCartFailure = () => ({
type: cartActions.ADD_TOCART_FAILURE
});

export const addTocart = ({ item, dispatch }) => {
const cartRequestAction = addToCartRequest();
dispatch(cartRequestAction);
return axios({
    url: "https://lyrical-repeated-snow.glitch.me/cart",
    method: "POST",
    data: {
    ...item
    }
})
    .then((res) => {
    const cartSuccessAction = addToCartSuccess();
    dispatch(cartSuccessAction);
    })
    .catch((err) => {
    const cartErrorAction = addToCartFailure();
    dispatch(cartErrorAction);
    });
};
  
  ////// Get Cart Items ///////////

export const getCartRequest = () => ({
    type: cartActions.GET_CART_REQUEST
});

export const getCartSuccess = (data) => ({
    type: cartActions.GET_CART_SUCCESS,
    payload: data
});

export const getCartFailure = () => ({
    type: cartActions.GET_CART_FAILURE
})

export const getCart = () => (dispatch) => {
    const getCartRequestAction = getCartRequest();
    dispatch(getCartRequestAction)
    return axios({
        url: `https://lyrical-repeated-snow.glitch.me/cart`,
        method: "GET"
      })
        .then((res) => {
            const getCartSuccessAction = getCartSuccess(res.data);
            dispatch(getCartSuccessAction)
        })
        .catch((err) => {
            const getCartFailureAction = getCartFailure();
            dispatch(getCartFailureAction)
        })
}

////// add or remove item from cart //////

export const patchCartRequest = () => ({
    type: cartActions.PATCH_CART_REQUEST
  });
  
export const patchCartSuccess = (data) => ({
    type: cartActions.PATCH_CART_SUCCESS,
    payload: data
    });

export const patchCartFailure = () => ({
    type: cartActions.PATCH_CART_FAILURE
    });

export const patchcart = ({id, num, dispatch }) => {
    const patchRequestAction = patchCartRequest();
    dispatch(patchRequestAction);
    return axios({
        url: `https://lyrical-repeated-snow.glitch.me/cart/${id}`,
        method: "PATCH",
        data: {
        nos: num
        }
    })
    .then((res) => {
    const patchSuccessAction = patchCartSuccess();
    dispatch(patchSuccessAction);
    })
    .catch((err) => {
    const patchErrorAction = patchCartFailure();
    dispatch(patchErrorAction);
    });
};

////// delete item from cart //////

export const delItemRequest = () => ({
    type: cartActions.DELETE_ITEM_REQUEST
  });
  
export const delItemSuccess = (data) => ({
    type: cartActions.DELETE_ITEM_SUCCESS,
    payload: data
    });

export const delItemFailure = () => ({
    type: cartActions.DELETE_ITEM_FAILURE
    });

export const deleteFromcart = ({id, dispatch }) => {
    const deleteItemRequestAction = delItemRequest();
    dispatch(deleteItemRequestAction);
    return axios({
        url: `https://lyrical-repeated-snow.glitch.me/cart/${id}`,
        method: "DELETE",
    })
    .then((res) => {
    const deleteItemSuccessAction = delItemSuccess();
    dispatch(deleteItemSuccessAction);
    })
    .catch((err) => {
    const deleteItemErrorAction = delItemFailure();
    dispatch(deleteItemErrorAction);
    });
};