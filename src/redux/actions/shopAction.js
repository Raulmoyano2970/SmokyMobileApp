import { createAsyncThunk } from "@reduxjs/toolkit";
import {baseURL} from "../../url";
import axios from "axios";


const addShops = createAsyncThunk("addShop", async (data) => {
    console.log(data)
    const shop = await axios.post(`${baseURL}shoppings`, data);
    return { shop: shop.data.response };
});

const deleteShops = createAsyncThunk("deleteShop", async (data) => {
    const shop = await axios.patch(`${baseURL}shoppings`, data);
    return { shop: shop.data.response };
});
const getShops = createAsyncThunk("getShop", async (data) => {
    const shop = await axios.get(`${baseURL}shoppings/${data}`);
    return { shop: shop.data.response };
});


const shopActions = {
    addShops,
    deleteShops,
    getShops
};
export default shopActions;