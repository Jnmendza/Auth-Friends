import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/a_Login';

const initialState = {
    isLoggingIn: false,
    loggedSuccess: true,
    error: ''
}

export const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
                loggedSuccess: false,
                error: ''
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                loggedSuccess: true,
                error: ''
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                loggedSuccess: false,
                error: ''
            }
        default: 
            return state;
    }
}