import CommentaireDataService from '../services/commentaire.service'

export const GET_COMMENTAIRE = "GET_COMMENTAIRE"
export const CREATE_COMMENTAIRE = "CREATE_COMMENTAIRE"
export const DELETE_COMMENTAIRE = "DELETE_COMMENTAIRE"
export const UPDATE_COMMENTAIRE = "UPDATE_COMMENTAIRE"


export const getCommentaire = (postId) => async (dispatch) => {
    try {
      const res = await CommentaireDataService.get(postId);
      dispatch({
        type: GET_COMMENTAIRE,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err.response);
    }
  };

  export const createCommentaire = (contenu, postId) => async (dispatch) => {
    try {
      const res = await CommentaireDataService.create(contenu, postId);
      
      dispatch({
        type: CREATE_COMMENTAIRE,
        payload: {res: res.data, postId: postId},
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const deleteCommentaire = (idCommentaire) => async (dispatch) => {
    try {
      const res = await CommentaireDataService.delete(idCommentaire);
      dispatch({
        type: DELETE_COMMENTAIRE,
        payload: {commentaireId: idCommentaire},
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err.response.data);
    }
  };

  export const updateCommentaire = (contenuCommentaire, id) => async (dispatch) => {
    try {
      const res = await CommentaireDataService.update(contenuCommentaire, id);
      dispatch({
        type: UPDATE_COMMENTAIRE,
        payload: {contenu: contenuCommentaire, id: id},
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err.response.data);
    }
  };