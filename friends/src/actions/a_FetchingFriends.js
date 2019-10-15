import { axiosWithAuth } from '../utils/axiosWithAuth';


// TYPES
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const FetchingFriends = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START })
        axiosWithAuth()
            .get(`/api/friends`)
            .then(response => {
                console.log(response)
                dispatch({ type: FETCH_SUCCESS, payload: response.data })
            })
            .catch(error => {
                console.log(error)
                dispatch({ type: FETCH_FAILURE, payload: error.response })
            })

    }
}

