import { CREATE_POST, DELETE_POST, UPDATE_POST, DISLIKE_POST, GET_ALL_POST, LIKE_POST, SUPPRIMER_DISLIKE_POST, SUPPRIMER_LIKE_POST } from "../actions/post.actions";


const initialState = [{}];

export default function userReducer(state = initialState, action){
    switch (action.type){
        case CREATE_POST:
            return [...state, action.payload]
        case GET_ALL_POST:
            return action.payload
        case DELETE_POST:
            return state.filter((post) => post.id !== action.payload.postId);
        case UPDATE_POST:
          return state.map((post) => {
            if (post.id === action.payload.id) {
              return {
                ...post,
                contenu: action.payload.contenu,
              };
            } else return post;
          });
        case LIKE_POST:
            return state.map((post) => {
                if (post.id === action.payload.postId) {
                  return {
                    ...post,
                    Like: [...post.Like, action.payload.user]
                  };
                } else return post;
              });
        case SUPPRIMER_LIKE_POST:
            return state.map((post) => {
                if (post.id === action.payload.postId) {
                    let newArray = post.Like.filter((like) => like.id !== action.payload.user.id);
                  return {
                    ...post,
                    Like: newArray
                  };
                } else return post;
              });
        case DISLIKE_POST:
            return state.map((post) => {
                if (post.id === action.payload.postId) {
                  return {
                    ...post,
                    Dislike: [...post.Dislike, action.payload.user]
                  };
                } else return post;
              });
        case SUPPRIMER_DISLIKE_POST:
            return state.map((post) => {
                if (post.id === action.payload.postId) {
                    let newArray = post.Dislike.filter((dislike) => dislike.id !== action.payload.user.id);
                  return {
                    ...post,
                    Dislike: newArray
                  };
                } else return post;
              });
        default:
            return state
    }
}

