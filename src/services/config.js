import axios from "axios";
import cookie from 'js-cookie'



// export default axios.create({
//   baseURL: "http://localhost:3001",
//   headers: {
//     "Content-type": "application/json"
//   }
// });

//Config deploiement netlify
export default axios.create({
  baseURL: "https://colligroupomania.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});

export function getToken(){
    return cookie.get('jwt');
}