import API, { getToken } from "./config";


const endpoint = '/api/post';

class PostDataService {

    getAll() {
        return API.get(`${endpoint}`, {
            headers: {
                'Authorization': `token ${getToken()}`
            }})

    }

    create(postData) {
        return API.post(`${endpoint}`, postData, {
            headers: {
                'Authorization': `token ${getToken()}`
            }})

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

    update(postData, id){
        return API.put(`${endpoint}/${id}`, postData, {
            headers: {
                'Authorization': `token ${getToken()}`
            }

        })
    }

}
export default new PostDataService();