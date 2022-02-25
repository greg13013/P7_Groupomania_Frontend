import PostDataService from '../services/post.service'

export const GET_ALL_POST = "GET_ALL_POST"
export const CREATE_POST = "CREATE_POST"
export const DELETE_POST = "DELETE_POST"

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