import { createAsyncThunk } from "@reduxjs/toolkit";
import {baseURL} from "../../url";
import axios from "axios";


const getVapers = createAsyncThunk("getVaper", async (data) => {
  const vapers = await axios.get(`${baseURL}equiments?name=${data.name}&category=${data.category}`);
  return { vapers: vapers.data.response };
});

const getCategories = createAsyncThunk("getCategory", async () => {
    const vapers = await axios.get(`${baseURL}equiments`);
    return { category: ([... new Set(vapers.data.response.map(e => e.category))]) };
  });



const vapersActions = {
  getVapers,
  getCategories,
};
export default vapersActions;