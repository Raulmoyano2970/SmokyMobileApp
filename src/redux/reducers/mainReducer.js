import { combineReducers } from "@reduxjs/toolkit";
import vapersReducer from "./vapersReducer";
import eliquidsReducer from "./eliquidsReducer";

const mainReducer = combineReducers({
    vapersReducer,
    eliquidsReducer,
})

export default mainReducer