import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL

export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const GET_USER = "GET_USER";

export const LOGOUT = "LOGOUT";


export const ERROR_SIGNUP = "ERROR_SIGNUP";
export const ERROR_CLEAR = "ERROR_CLEAR";



export const login = (user) => {
    return (dispatch) => {
        return axios.post(`${baseUrl}/api/utilisateur/login`, { email: user.email, password: user.password })
            .then(res => {
                dispatch({ type: LOGIN, payload: res.data })
            })
            .catch(err => console.log(err.response.data.error))
    }
}

export const logout = () => {
    return (dispatch) => {
        return dispatch({type: LOGOUT, payload: {}})
    }
}

export const signUp = (user) => {
    return (dispatch) => {
            return axios.post(`${baseUrl}/api/utilisateur/signup`, { username: user.username, email: user.email, password: user.password, admin: user.admin })
            .then(res => {
                
                dispatch({ type: SIGNUP, payload: res.data })

                //Suppression message d'erreur
                dispatch({ type: ERROR_CLEAR })

                // dispatch(login(user))
            })
            .catch((err) => {
                console.log(err.response.data.error)

                //Stockage message erreur api
                dispatch({ type: ERROR_SIGNUP, payload: err.response.data.error})
            })
        
    }
}

export const getUser = (id, token) => {
    return (dispatch) => {
        return axios.get(`${baseUrl}/api/utilisateur/${id}`, {
            headers: {
                'Authorization': `token ${token}`
            }
          })
            .then(res => {
                dispatch({ type: GET_USER, payload: res.data })
            })
            .catch(err => console.log(err.response))
    }
}