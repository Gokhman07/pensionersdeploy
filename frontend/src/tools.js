import {Input} from "react-spreadsheet-grid";
import React from "react";

export const getRows = (data, col, initialValues = {}) => {
    const array = [];
    for (let i = 0; i <= col - 1; i++) {
        let obj = {}
        for (let j = 0; j <= data.length - 1; j++) {
            obj[data[j]] = !isNull(initialValues[data[j]]) ? initialValues[data[j]] : ''
        }
        array.push({...obj, id: `col${i}`, positionId: `position${i}`})
    }
    return array
}
export const getInput = (data, callback) => {
    return data.map((item) => ({
            title: () => item[0],
            value: (row, {focus}) => {
                return (
                    <Input
                        value={row[item[1]]}
                        focus={focus}
                        onChange={callback(row.id, item[1])}
                    />
                );
            }
        }
    ))
}
export const formatDate = (date) => {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
    return '20' + yy + '-' + mm + '-' + dd;
}
export const isNull = (value) => value === null || value == undefined