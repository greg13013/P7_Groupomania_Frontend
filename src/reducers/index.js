import { combineReducers } from "redux";

import userReducer from "./user.reducer";
import adminReducer from "./admin.reducer";
import postReducer from "./post.reducer";
import commentaireReducer from "./commentaire.reducer";

export default combineReducers({
    userReducer,
    adminReducer,
    postReducer,
    commentaireReducer,
});