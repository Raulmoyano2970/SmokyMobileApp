import { createReducer } from "@reduxjs/toolkit";
import userAction from "../actions/userAction";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { login, reEnter, logout, updateMyProfile, doUser } = userAction;

const initialState = {
    name: "",
    age: "",
    lastName: "",
    photo: "",
    logged: false,
    token: "",
    role: "",
    id: "",
    myUser: {}
};

const userReducer = createReducer(initialState, (builder) => {

    builder
        .addCase(login.fulfilled, (state, action) => {
            const { success, response } = action.payload
            if (success) {
                let { user, token } = response
                async function storeToken() {
                    try {
                        await AsyncStorage.setItem('token', JSON.stringify({ token: {user: token} }))
                    } catch (e) {
                        console.log(e)
                    }
                }
                storeToken()
                let newState = {
                    ...state,
                    id: user.id,
                    name: user.name,
                    lastName: user.lastName,
                    age: user.age,
                    role: user.role,
                    photo: user.photo,
                    logged: true,
                    token: token
                }
                return newState
            } else {
                let newState = {
                    ...state,
                    message: response
                }
                return newState
            }
        })

        .addCase(reEnter.fulfilled, (state, action) => {
            const { success, response, token } = action.payload
            if (success) {
                let { user} = response
                let newState = {
                    ...state,
                    myUser: user,
                    name: user.name,
                    photo: user.photo,
                    role: user.role,
                    id: user.id,
                    logged: true,
                    token: token    
                }
                return newState
            } else {
                let newState = {
                    ...state,
                    message: response
                }
                return newState
            }
        })

        .addCase(logout.fulfilled, (state, action) => {
            const { success, response } = action.payload
            if (success) {
                async function storeToken() {
                    try {
                        await AsyncStorage.removeItem('token')
                    } catch (e) {
                        console.log(e)
                    }
                }
                storeToken()
                let newState = {
                    ...state,
                    name: '',
                    photo: '',
                    logged: false,
                    token: '',
                    role: ''
                }
                return newState
            } else {
                let newState = {
                    ...state,
                    mensaje: response
                }
                return newState
            }
        })

        .addCase(updateMyProfile.fulfilled, (state, action) => {
            return { ...state, myUser: action.payload }
        })

        .addCase(doUser.fulfilled, (state, action) => {
            console.log(action.payload.response)
            return {
                ...state,
                myUser: action.payload.response,
            };
        })
})

export default userReducer;