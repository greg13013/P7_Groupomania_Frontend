import { CREATE_COMMENTAIRE, GET_COMMENTAIRE } from "../actions/commentaire.actions";

const initialState = [];

export default function userReducer(state = initialState, action){
    switch (action.type){
        case CREATE_COMMENTAIRE:
            return state.map(array => {
                console.log('map commentaire action', array);
                if (array[0].postId === action.payload.postId){
                    return [...array, action.payload.res]
                }

                    else return array
            })
        case GET_COMMENTAIRE:
            return [...state, action.payload]
        // case DELETE_POST:
        //     return state.filter((post) => post.id !== action.payload.postId);
        // case UPDATE_POST:
        //   return state.map((post) => {
        //     if (post.id === action.payload.id) {
        //       return {
        //         ...post,
        //         contenu: action.payload.contenu,
        //       };
        //     } else return post;
        //   });
        default:
            return state
    }
}

