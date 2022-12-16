import { createReducer } from "@reduxjs/toolkit";
import eliquidsActions from "../actions/eliquidsAction";



const initialState = {
  eliquids: [],
  category: [],
};

const eliquidsReducer = createReducer(initialState, (builder) => {
  builder.addCase(eliquidsActions.getEliquids.fulfilled, (state, action) => {
    return {
      ...state,
      eliquids: action.payload.eliquids,
    };
  });
  builder.addCase(eliquidsActions.getCategories.fulfilled, (state, action) => {
    return {
      ...state,
      category: action.payload.category,
    };
  });
 
 
});



export default eliquidsReducer;