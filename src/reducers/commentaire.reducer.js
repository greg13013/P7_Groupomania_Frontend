import { CREATE_COMMENTAIRE, DELETE_COMMENTAIRE, GET_COMMENTAIRE } from "../actions/commentaire.actions";

const initialState = [];

export default function userReducer(state = initialState, action){
    switch (action.type){
        case CREATE_COMMENTAIRE:
            return state.map(array => {
                console.log('map commentaire action', array);
                console.log('action commentaire action', action.payload);
                if (array[0].postId === action.payload.postId){
                    return [...array, action.payload.res[0]]
                }

                    else return array
            })
        case GET_COMMENTAIRE:
            return [...state, action.payload]
        case DELETE_COMMENTAIRE:
            return state.map(array => {
                return array.filter((commentaire) => commentaire.id !== action.payload.commentaireId);
            })
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

