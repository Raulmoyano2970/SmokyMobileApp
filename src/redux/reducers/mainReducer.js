import { combineReducers } from "@reduxjs/toolkit";
import vapersReducer from "./vapersReducer";
import eliquidsReducer from "./eliquidsReducer";
import userReducer from "./userReducer";

const mainReducer = combineReducers({
    vapersReducer,
    eliquidsReducer,
    userReducer

})

export default mainReducer