import API, { getToken } from "./config";


const endpoint = '/api/commentaire';

class CommentaireDataService {

    getAll() {
        return API.get(`${endpoint}/likesDislikes`, {
            headers: {
                'Authorization': `token ${getToken()}`
            }})

    }

    create(contenu, postId) {
        return API.post(`${endpoint}`, {contenu: contenu, postId: postId}, {
            headers: {
                'Authorization': `token ${getToken()}`
            }})

    }

    get(idPost) {
        return API.get(`${endpoint}/${idPost}`, {
            headers: {
                'Authorization': `token ${getToken()}`
            }

        })
    }

    delete(idCommentaire) {
        return API.delete(`${endpoint}/${idCommentaire}`, {
            headers: {
                'Authorization': `token ${getToken()}`
            }

        }) 
    }

    update(contenuCommentaire, id){
        return API.put(`${endpoint}/${id}`, {contenu: contenuCommentaire}, {
            headers: {
                'Authorization': `token ${getToken()}`
            }

        })
    }

}
export default new CommentaireDataService();