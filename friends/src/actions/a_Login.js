import { axiosWithAuth } from '../utils/axiosWithAuth';


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LoginIn = (props) => {
    const credentials = {
        username: props.username,
        password: props.password

    }

    return(dispatch) => {
        dispatch({ type: LOGIN_START })
        axiosWithAuth()
            .post(`/api/login`, credentials)
            .then(response => {
                console.log(response)
                dispatch({ type: LOGIN_SUCCESS, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: LOGIN_FAILURE, payload: error.response })
            })
    }
}