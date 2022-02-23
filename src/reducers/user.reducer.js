import { GET_USER, LOGIN, LOGOUT, SIGNUP } from "../actions/user.actions";

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
        default:
            return state
    }
}

