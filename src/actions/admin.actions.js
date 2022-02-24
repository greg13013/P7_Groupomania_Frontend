import UserDataService from '../services/user.service'

export const ADMIN_GET_ALL_USER = "ADMIN_GET_ALL_USER"
export const ADMIN_DELETE_USER = "ADMIN_DELETE_USER"

export const getAllUser = () => async (dispatch) => {
    try {
      const res = await UserDataService.getAll();
      
      dispatch({
        type: ADMIN_GET_ALL_USER,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err.response.data.error);
    }
  };

  export const deleteUser = (id) => async (dispatch) => {
    try {
      const res = await UserDataService.delete(id);
      dispatch({
        type: ADMIN_DELETE_USER,
        payload: {userId: id},
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err.response.data);
    }
  };