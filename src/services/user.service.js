import API from "./config";


const endpoint = '/utilisateur';

class UserDataService {

    getAll() {
        return API.get(`${endpoint}`)

    }

    login(user) {
        return API.post(`${endpoint}/login`, { email: user.email, password: user.password })

    }

    signup(user) {
        return API.post(`${endpoint}/signup`, { username: user.username, email: user.email, password: user.password, admin: user.admin })

    }

    get(id, token) {
        return API.get(`${endpoint}/${id}`, {
            headers: {
                'Authorization': `token ${token}`
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