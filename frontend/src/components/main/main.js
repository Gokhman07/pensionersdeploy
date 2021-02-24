import React, {useState} from 'react'
import {Grid} from 'react-spreadsheet-grid'
import data from './data'
import {getInput, getRows} from "../../tools";
import {TableC, Title} from "./styles";
import {useDispatch} from "react-redux";
import {saveTable} from "../../reducers/table_reducer";
const Table = ({fields,rows,dir}) => {
    const [state, setState] = useState('')
    const dispatch = useDispatch()
    const onFieldChange = (rowId, field) => (value) => {
        const row = rows.find(item => item.id === rowId);
        row[field] = value;
        // setState([].concat(rows))
        const data = {}
        data[`table${dir}`] = [].concat(rows)
        dispatch({type : 'CHANGE-DATA',payload : data})
        dispatch(saveTable(data))
    }
    return (
        <Grid
            columns={getInput(fields, onFieldChange)}
            rows={rows}
            getRowKey={row => row.id}
        />
    )
}
const Main = () => {
    const {rows,fields,initialValues} = data
    return <>
        <Title>ביטוח סיכונים</Title>
        <TableC><Table fields={fields[0]} rows={getRows(rows[0],1,initialValues[0])} dir={1} /></TableC>
        <TableC><Table fields={fields[1]} rows={getRows(rows[1],1,initialValues[1])} dir={2}/></TableC>
        <TableC><Table fields={fields[2]} rows={getRows(rows[2],1,initialValues[2])} dir={3}/></TableC>
        <TableC><Table fields={fields[3]} rows={getRows(rows[3],1,initialValues[3])} dir={4}/></TableC>
    </>
}
export default Main