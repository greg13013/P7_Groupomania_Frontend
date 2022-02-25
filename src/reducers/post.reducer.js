import { CREATE_POST, DELETE_POST, GET_ALL_POST } from "../actions/post.actions";


const initialState = [{}];

export default function userReducer(state = initialState, action){
    switch (action.type){
        case CREATE_POST:
            return [...state, action.payload]
        case GET_ALL_POST:
            console.log('ACTION GET ALL POST : ', action.payload);
            return action.payload
        case DELETE_POST:
            return state.filter((post) => post.id !== action.payload.postId);
        default:
            return state
    }
}
