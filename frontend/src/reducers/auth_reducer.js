import axios from "axios";
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import api from "../API";
import {stopSubmit} from "redux-form";

const init = {
    username: null,
    id : null,
    token : null
}
// /:username/:password
export const signUp = createAsyncThunk(
    'GET-USERS',
    async (data, {dispatch}) => {
        //Когда бекенд готов будет, нужно открыть этот путь
        const response = await api.login(data)
        if (response.data.status!==200){
            dispatch(stopSubmit('sign_up',{_error : 'Wrong name or password.'}))
            return
        }
        const {id,token,login:username} = response.data.data
        dispatch(signUpAct({username,id,token}))

        // dispatch(signUpAct(data))
    }
)
export const getCookie = createAsyncThunk('GET_COOKIE',
    async () => {
        const response = await api.getCookie()
        console.log(response)
    })

const auth_reducer=createSlice({
    name : 'auth',
    initialState : init,
    reducers : {
        signUpAct(state,action){
            const {username,id,token} = action.payload
            return {...state,username,id,token}
        }
    },
    extraReducers: {
    }
})

export let {signUpAct} = auth_reducer.actions;



export default auth_reducer.reducer