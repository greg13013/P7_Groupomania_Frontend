import API, { getToken } from "./config";


const endpoint = '/api/utilisateur';

class UserDataService {

    getAll() {
        return API.get(`${endpoint}`, {
            headers: {
                'Authorization': `token ${getToken()}`
            }})

    }

    login(user) {
        return API.post(`${endpoint}/login`, { email: user.email, password: user.password })

    }

    signup(userData) {
        return API.post(`${endpoint}/signup`, userData)

    }

    get(id) {
        return API.get(`${endpoint}/${id}`, {
            headers: {
                'Authorization': `token ${getToken()}`
            }

        })
    }

    delete(id) {
        return API.delete(`${endpoint}/${id}`, {
            headers: {
                'Authorization': `token ${getToken()}`
            }

        }) 
    }

    update(userData, id){
        return API.put(`${endpoint}/${id}`, userData, {
            headers: {
                'Authorization': `token ${getToken()}`
            }

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