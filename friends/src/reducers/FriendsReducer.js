import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/a_FetchingFriends';

const initialState = {
    friends: [],
    isFetching: false,
    isAdding: false,
    error: '',
}

export const FriendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
            case FETCH_SUCCESS:
                    return {
                        ...state,
                        friends: action.payload,
                        isFetching: false,
                        error: ''
                    }
                    case FETCH_FAILURE:
                            return {
                                ...state,
                                isFetching: false,
                                error: 'Fetching Failed'
                            }
        default:
            return state;
    }
}

