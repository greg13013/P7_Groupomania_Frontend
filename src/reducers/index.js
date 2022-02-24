import { combineReducers } from "redux";

import userReducer from "./user.reducer";
import adminReducer from "./admin.reducer";

export default combineReducers({
    userReducer,
    adminReducer,
});