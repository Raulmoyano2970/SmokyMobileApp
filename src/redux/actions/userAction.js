import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { baseURL } from "../../url";

const login = createAsyncThunk('login user', async (data) => {
    try {
        let user = await axios.post(`${baseURL}auth/sign-in`, data)
        if (user.data.success) {
            return {
                success: true,
                response: user.data.response,
                message: user.data.message
            }
        } else {
            return {
                success: false,
                response: user.data.message[0]
            }
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            response: error.response.data.message
        }
    }

})

const reEntry = createAsyncThunk('reEntry', async (token) => {
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    try {
        let user = await axios.post(`${baseURL}auth/token`, null, headers)
        return {
            success: true,
            response: user.data.response,
            token: token,
        }

    } catch (error) {
        console.log(error.response)
        return {
            success: false,
            response: error.response.data.message
        }
    }
});

const signOff = createAsyncThunk('signOff', async (token) => {
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    try {
        let user = await axios.post(`${baseURL}auth/sign-out`, null, headers)
        return {
            success: true,
            response: user.data.message
        }
    } catch (error) {
        console.log(error.response)
        return {
            success: false,
            response: error.response.data.message
        }
    }
});

const updateMyProfile = createAsyncThunk("updateMyProfile", async (data) => {
    try {
        const response = await axios.patch(`${baseURL}auth/me/${data.id}`, data.user);
        console.log(response.data.response)
        return response.data.response;
    }
    catch (error) {
        console.log(error)
        return {
            payload: 'An error has ocurred'
        }
    }

});

const doUser = createAsyncThunk("doUser", async (id) => {
    try {
        let res = await axios.get(`${baseURL}auth/me/${id}`);
        return {
            success: true,
            response: res.data.response,
        };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            response: "An error has ocurred",
        };
    }
});

const userAction = {
    login,
    reEntry,
    signOff,
    updateMyProfile,
    doUser
}

export default userAction