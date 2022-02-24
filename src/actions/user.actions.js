import UserDataService from '../services/user.service'
import cookie from 'js-cookie'

export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const GET_USER = "GET_USER";

export const LOGOUT = "LOGOUT";
export const LOGIN_COOKIE = "LOGIN_COOKIE";



export const login = (user) => async (dispatch) => {
    try {
      const res = await UserDataService.login(user);
      dispatch({
        type: LOGIN,
        payload: res.data,
      });

      //Stock le token dans un cookie pour éviter la déconnexion à chaque refresh
      cookie.set('jwt', res.data.token, {expires: 1, secure: true});
      cookie.set('userId', res.data.userId, {expires: 1, secure: true});
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err.response.data.error);
    }
  };

export const logout = () => {
    return (dispatch) => {
        cookie.remove('jwt');
        cookie.remove('userId');
        return dispatch({type: LOGOUT, payload: {}})
    }
}

export const loginCookie = (userId, token) => async (dispatch) => {
        try {
            // const res = await UserDataService.login(user);
            dispatch({
              type: LOGIN,
              payload: {userId, token},
            });
      
            return Promise.resolve(userId, token);
          } catch (err) {
            return Promise.reject(err);
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

  export const getUser = (id) => async (dispatch) => {
    try {
      const res = await UserDataService.get(id);
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err.response.data.error);
    }
  };