import axios from "axios";

export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const GET_USER = "GET_USER";


export const login = (user) => {
    return (dispatch) => {
        return axios.post(`http://localhost:3001/api/utilisateur/login`, { email: user.email, password: user.password })
            .then(res => {
                dispatch({ type: LOGIN, payload: res.data })
            })
            .catch(err => console.log(err))
    }
}

export const signUp = (user) => {
    return (dispatch) => {
        return axios.post(`http://localhost:3001/api/utilisateur/signup`, { username: user.username, email: user.email, password: user.password, admin: user.admin })
            .then(res => {
                dispatch({ type: SIGNUP, payload: res.data })
            })
            .catch(err => console.log(err))
    }
}

export const getUser = (user) => {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/api/utilisateur/${user.id}`)
            .then(res => {
                dispatch({ type: GET_USER, payload: res.data })
            })
            .catch(err => console.log(err))
    }
}