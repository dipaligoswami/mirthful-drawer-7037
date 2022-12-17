import axios from 'axios';

export const authActions = {
    AUTH_REQUEST: "AUTH_REQUEST",
    AUTH_SUCCESS: "AUTH_SUCCESS",
    AUTH_FAILURE: "AUTH_FAILURE"
}

export const authRequest = () => ({
    type: authActions.AUTH_REQUEST
});

export const authSuccess = (data) => ({
    type: authActions.AUTH_SUCCESS,
    payload: data
});

export const authFailure = () => ({
    type: authActions.AUTH_FAILURE
})

export const getAuthChecked = ({email, password}) => (dispatch) => {
    const authRequestAction = authRequest();
    dispatch(authRequestAction)
    return axios({
        url: "https://reqres.in/api/login",
        method: "POST",
        data: {
          email,
          password
        }
      })
        .then((res) => {
            const authSuccessAction = authSuccess(res.data);
            dispatch(authSuccessAction)
        })
        .catch((err) => {
            const authFailureAction = authFailure();
            dispatch(authFailureAction)
        })
}

