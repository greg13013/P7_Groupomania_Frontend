import PostDataService from '../services/post.service'

export const GET_ALL_POST = "GET_ALL_POST"
export const CREATE_POST = "CREATE_POST"
export const DELETE_POST = "DELETE_POST"
export const UPDATE_POST = "UPDATE_POST"

export const LIKE_POST = "LIKE_POST"
export const SUPPRIMER_LIKE_POST = "SUPPRIMER_LIKE_POST"
export const DISLIKE_POST = "DISLIKE_POST"
export const SUPPRIMER_DISLIKE_POST = "SUPPRIMER_DISLIKE_POST"

export const getAllPost = () => async (dispatch) => {
    try {
      const res = await PostDataService.getAll();
      
      dispatch({
        type: GET_ALL_POST,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err.response.data.error);
    }
  };

  export const createPost = (post) => async (dispatch) => {
    try {
      const res = await PostDataService.create(post);
      
      dispatch({
        type: CREATE_POST,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err.response.data.error);
    }
  };

  export const deletePost = (id) => async (dispatch) => {
    try {
      const res = await PostDataService.delete(id);
      dispatch({
        type: DELETE_POST,
        payload: {postId: id},
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err.response.data);
    }
  };

  export const updatePost = (contenuPost, id) => async (dispatch) => {
    try {
      const res = await PostDataService.update(contenuPost, id);
      dispatch({
        type: UPDATE_POST,
        payload: {contenu: contenuPost, id: id},
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err.response.data);
    }
  };

  export const likePost = (id, user) => async (dispatch) => {
    try {
      const res = await PostDataService.like(id);
      dispatch({
        type: LIKE_POST,
        payload: {postId: id, user: user},
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err.response.data);
    }
  };

  export const supprimerLikePost = (id, user) => async (dispatch) => {
    try {
      const res = await PostDataService.like(id);
      dispatch({
        type: SUPPRIMER_LIKE_POST,
        payload: {postId: id, user: user},
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err.response.data);
    }
  };

  export const dislikePost = (id, user) => async (dispatch) => {
    try {
      const res = await PostDataService.dislike(id);
      dispatch({
        type: DISLIKE_POST,
        payload: {postId: id, user: user},
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err.response.data);
    }
  };

  export const supprimerDislikePost = (id, user) => async (dispatch) => {
    try {
      const res = await PostDataService.dislike(id);
      dispatch({
        type: SUPPRIMER_DISLIKE_POST,
        payload: {postId: id, user: user},
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err.response.data);
    }
  };