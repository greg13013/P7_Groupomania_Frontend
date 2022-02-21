import { GET_USER, LOGIN, LOGOUT, SIGNUP } from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action){
    switch (action.type){
        case LOGIN:
            console.log('login action : ', action)
            return action.payload
        case LOGOUT:
            return initialState
        case SIGNUP:
            console.log('signup action : ', action)
            return action.payload
        case GET_USER:
            console.log('get_user action : ', action)
            return action.payload
        default:
            return state
    }
}