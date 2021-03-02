import React from "react";

export const formatDate = (date) => {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
    return '20' + yy + '-' + mm + '-' + dd;
}

export const ObjectProzentsToInt = (data) => {
    const e = (item) => {
        if (item === null) {
            return 0
        }
        if (typeof item == 'number') {
            return item
        }
        return Number(item.replace('%', ''))
    }
    return Object.fromEntries(Object.entries(data).map(item => [item[0], e(item[1])]))
}
export const ObjectProzentsToIntReverse = (data) => {
    const e = item => {
        if (item[1]===null){
            return 0
        }
        return item[1]
    }
    return Object.fromEntries(Object.entries(data).map(item => [item[0], e(item)]))
}

export const isNull = (value) => value === null || value === undefined