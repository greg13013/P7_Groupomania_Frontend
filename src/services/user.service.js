import API from "./config";


const endpoint = '/utilisateur';

class UserDataService {

    getAll() {
        return new Promise((resolve, reject) => {
            API.get(`${endpoint}`).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err.response.data.error)
            })
        })
    }

    login(user) {
        return new Promise((resolve, reject) => {
            API.post(`${endpoint}/login`, { email: user.email, password: user.password }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err.response.data.error)
            })
        })
    }

    signup(user) {
        return new Promise((resolve, reject) => {
            API.post(`${endpoint}/signup`, { username: user.username, email: user.email, password: user.password, admin: user.admin }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err.response.data.error)
            })
        })
    }

    get(id, token) {
        return new Promise((resolve, reject) => {
            API.get(`${endpoint}/${id}`, {
                headers: {
                    'Authorization': `token ${token}`
                }
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err.response.data.error)
            })
        })
    }

    //   create(data) {
    //     return API.post("/tutorials", data);
    //   }

    //   update(id, data) {
    //     return API.put(`/tutorials/${id}`, data);
    //   }

    //   delete(id) {
    //     return API.delete(`/tutorials/${id}`);
    //   }

    //   deleteAll() {
    //     return API.delete(`/tutorials`);
    //   }

    //   findByTitle(title) {
    //     return API.get(`/tutorials?title=${title}`);
    //   }

}
export default new UserDataService();