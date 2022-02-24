import axios from "axios";
import cookie from 'js-cookie'



export default axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-type": "application/json"
  }
});

export function getToken(){
    return cookie.get('jwt');
}