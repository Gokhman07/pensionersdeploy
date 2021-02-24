import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import api from "../API";

const init = {
    username: null,
    id: null,
    token: null
}
export const signUp = createAsyncThunk(
    'GET-USERS',
    async (data, {dispatch}) => {
        const response = await api.login(data)
        if (response.data.status !== 200) {
            return
        }
        const {id, token, login: username} = response.data.data
        dispatch(signUpAct({username, id, token}))
    }
)
export const getCookie = createAsyncThunk('GET_COOKIE',
    async () => {
        const response = await api.getCookie()
        console.log(response)
    })

const auth_reducer = createSlice({
    name: 'auth',
    initialState: init,
    reducers: {
        signUpAct(state, action) {
            const {username, id, token} = action.payload
            return {...state, username, id, token}
        }
    },
    extraReducers: {}
})

export const saveTable = createAsyncThunk('SAVE_TABLE',
    async (data) => {
        const response = await api.changeTable(data)
    })
export const getTableData = createAsyncThunk('GET_TABLE_DATA',
    async (id) => {
        const {data} = await api.getTableData(id)
        if (data.length == 0) {
            return false
        }
        return data[0]
    }
)


export let {signUpAct} = auth_reducer.actions;


export default auth_reducer.reducer