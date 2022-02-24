import API from "./config";
import cookie from 'js-cookie'

const endpoint = '/utilisateur';
// const token = cookie.get('jwt');

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

    getToken(){
        return cookie.get('jwt');
    }

    get(id) {
        console.log(this.getToken());
        console.log(id);
        return API.get(`${endpoint}/${id}`, {
            headers: {
                'Authorization': `token ${this.getToken()}`
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