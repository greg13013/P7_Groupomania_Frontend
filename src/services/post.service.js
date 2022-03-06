import API, { getToken } from "./config";


const endpoint = '/api/post';

class PostDataService {

    getAll() {
        return API.get(`${endpoint}/likesDislikes`, {
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

    update(contenuPost, id){
        return API.put(`${endpoint}/${id}`, {contenu: contenuPost}, {
            headers: {
                'Authorization': `token ${getToken()}`
            }

        })
    }

    like(id){
        return API.post(`${endpoint}/${id}/like`, {}, {
            headers: {
                'Authorization': `token ${getToken()}`
            }

        })
    }

    dislike(id){
        return API.post(`${endpoint}/${id}/dislike`, {}, {
            headers: {
                'Authorization': `token ${getToken()}`
            }

        })
    }

}
export default new PostDataService();