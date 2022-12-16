import { createAsyncThunk } from "@reduxjs/toolkit";
import {baseURL} from "../../url.js";
import axios from "axios";


const getEliquids = createAsyncThunk("getEliquid", async (data) => {
  const eliquids = await axios.get(`${baseURL}liquids?name=${data.name}&category=${data.category}`);
  return { eliquids: eliquids.data.response };
});

const getCategories = createAsyncThunk("getCategory", async () => {
    const eliquids = await axios.get(`${baseURL}liquids`);
    return { category: ([... new Set(eliquids.data.response.map(e => e.category))]) };
  });



const eliquidsActions = {
  getEliquids,
  getCategories,
};
export default eliquidsActions;