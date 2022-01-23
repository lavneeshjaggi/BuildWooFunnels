import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    loading: false,
    users: []
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.FETCH_USERS:
            return state
        case UserActionTypes.FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        default:
            return state
    }
}

export default userReducer;
