import { combineReducers } from "redux";

import userReducer, { errorUserReducer } from "./user.reducer";

export default combineReducers({
    userReducer,
    errorUserReducer
});