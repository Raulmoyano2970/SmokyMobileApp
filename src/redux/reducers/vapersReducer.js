import { createReducer } from "@reduxjs/toolkit";
import vapersActions from "../actions/vapersAction";



const initialState = {
  vapers: [],
  category: [],
  search: ""
};

const vapersReducer = createReducer(initialState, (builder) => {
  builder.addCase(vapersActions.getVapers.fulfilled, (state, action) => {
    return {
      ...state,
      vapers: action.payload.vapers,
    };
  });
  builder.addCase(vapersActions.getCategories.fulfilled, (state, action) => {
    return {
      ...state,
      category: action.payload.category,
    };
  });
 
 
});



export default vapersReducer;