import { ADMIN_DELETE_USER, ADMIN_GET_ALL_USER } from "../actions/admin.actions";


const initialState = [{}];

export default function userReducer(state = initialState, action){
    switch (action.type){
        case ADMIN_GET_ALL_USER:
            return action.payload
        case ADMIN_DELETE_USER:
            return state.filter((user) => user.id !== action.payload.userId);
        default:
            return state
    }
}

