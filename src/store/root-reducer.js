import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { catergoriesReducer } from "./categories/category.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: catergoriesReducer,
});