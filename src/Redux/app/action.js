import axios from 'axios';

export const appActions = {
    POST_REQUEST: "POST_REQUEST",
    POST_SUCCESS: "POST_SUCCESS",
    POST_FAILURE: "POST_FAILURE"
}

export const postRequest = () => ({
    type: appActions.POST_REQUEST
});

export const postSuccess = (data) => ({
    type: appActions.POST_SUCCESS,
    payload: data
});

export const postFailure = () => ({
    type: appActions.POST_FAILURE
})

export const getPosts = (page,sor,ord) => (dispatch) => {
    const postRequestAction = postRequest();
    dispatch(postRequestAction)
    return axios({
        url: `https://lyrical-repeated-snow.glitch.me/products?_limit=12&_page=${page}&_sort=${sor}&_order=${ord}`,
        method: "GET"
      })
        .then((res) => {
            const postSuccessAction = postSuccess(res.data);
            dispatch(postSuccessAction)
        })
        .catch((err) => {
            const postFailureAction = postFailure();
            dispatch(postFailureAction)
        })
}