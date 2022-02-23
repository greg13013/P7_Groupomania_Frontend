import UserDataService from '../services/user.service'

export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const GET_USER = "GET_USER";

export const LOGOUT = "LOGOUT";



export const login = (user) => async (dispatch) => {
    try {
      const res = await UserDataService.login(user);
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err.response.data.error);
    }
  };

export const logout = () => {
    return (dispatch) => {
        return dispatch({type: LOGOUT, payload: {}})
    }
}

export const signUp = (user) => async (dispatch) => {
    try {
      const res = await UserDataService.signup(user);
      dispatch({
        type: SIGNUP,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err.response.data.error);
    }
  };

  export const getUser = (id, token) => async (dispatch) => {
    try {
      const res = await UserDataService.get(id, token);
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err.response.data.error);
    }
  };