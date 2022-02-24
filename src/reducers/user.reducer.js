import { DELETE_USER, GET_USER, LOGIN, LOGOUT, SIGNUP, UPDATE_USER } from "../actions/user.actions";

const initialState = {isLog: false};

export default function userReducer(state = initialState, action){
    switch (action.type){
        case LOGIN:
            return {...state, ...action.payload, isLog: true}
        case LOGOUT:
            return initialState
        case SIGNUP:
            return action.payload
        case GET_USER:
            return {...state, ...action.payload}
        case UPDATE_USER:
            return {...state, ...action.payload}
        case DELETE_USER:
            return initialState
        default:
            return state
    }
}

