import { CREATE_COMMENTAIRE, DELETE_COMMENTAIRE, GET_COMMENTAIRE } from "../actions/commentaire.actions";

const initialState = [];

export default function commentaireReducer(state = initialState, action){
    switch (action.type){
        case CREATE_COMMENTAIRE:
            
            var exist = false
            //Check si les commentaires du post sont présent dans le store, met a true si oui
            // eslint-disable-next-line array-callback-return
            state.map(array => {
                let check = array.some((element) => element.postId === action.payload.postId);

                if (check){
                    exist = true
                }

            })
            
            //Puis retourne le store
            if (exist){
                return state.map(array => {
                    let check = array.some((element) => element.postId === action.payload.postId);
                    if (check){
                        return [...array, action.payload.res[0]] 
                    }
                    else return array
                })
            } else {
                return [...state, action.payload.res]
            }
        case GET_COMMENTAIRE:
            return [...state, action.payload]
        case DELETE_COMMENTAIRE:
            return state.map(array => {
                return array.filter((commentaire) => commentaire.id !== action.payload.commentaireId);
            })
        default:
            return state
    }
}

