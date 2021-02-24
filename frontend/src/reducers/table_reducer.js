import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {formatDate, getRows} from "../tools";
import data from "../components/main/data";
import api from './../API'
const {rows} = data

getRows(rows[0],1)
const initialState = {
    table1 : getRows(rows[0],1),
    table2 : getRows(rows[1],1),
    table3 : getRows(rows[2],1),
    table4 : getRows(rows[3],1),
    toggle : false
}
const Table = createSlice({
    name : 'table',
    initialState,
    reducers : {
        changeTable(state,action){
            return {...state,...action.payload,toggle: true}
        }
    }
})
// export const saveTable = createAsyncThunk('SAVE_TABLE',
//     async (data,{dispatch,getState}) => {
//     const state = getState().table
//     const test = {
//         ...state.table1[0],
//         ...state.table2[0],
//         ...state.table3[0],
//         ...state.table4[0]
//     }
//     if (false){
//         const resopnse =  () => console.log(test) //когда бкекнд откроется, открыть путь
//     }
//     }
// )
export let {changeTable} = Table.actions

const mainReducer = function(state = initialState,action){
    switch (action.type){
        case 'CHANGE-DATA':
            return {...state,...action.payload,toggle: true}
        default:
            return state
    }
}
export const saveTable = () => async (dispatch,getState) => {
    const state = getState().table
    let data = MakeStringsNumbersWhereYouCan({
        ...state.table1[0],
        ...state.table2[0],
        ...state.table3[0],
        ...state.table4[0]
    })
    const response = await api.changeTable({...data,id_pensioner: getState().auth.id})
    console.log(response.data)
    console.log(data)
}
export const getTableData = (id) => async (dispatch) => {
    // const {data} = await api.getTableData(id)
    // if (data.length==0){
    //     return
    // }
    // const { manufacture_name, pos_type, collective_name, cash_opening_date,
    //     report_year, period_report, last_upadete_of_this_screen, total_annual_premium, insuarunce_amount,
    //     insurance_agency_handles, agent_name, agent_telephone, agent_mail, remarks} = data[0]
    // const senderData = {
    //     table1 : {last_upadete_of_this_screen,period_report,report_year,cash_opening_date,collective_name
    //     ,pos_type,manufacture_name},
    //     table2 : {insuarunce_amount,total_annual_premium},
    //     table3 : {agent_mail,agent_telephone,agent_name,insurance_agency_handles},
    //     table4 : {remarks}
    //
    // }
    // debugger
    // dispatch({type : 'CHANGE-DATA',payload: senderData})
}

const MakeStringsNumbersWhereYouCan = (data) => {
    data.period_report = +data.period_report
    data.insuarunce_amount = +data.insuarunce_amount
    data.total_annual_premium = +data.total_annual_premium
    return data
}
// make strings numbers where you can

export default mainReducer