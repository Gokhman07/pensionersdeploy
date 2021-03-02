import {isNull} from "./tools";

export const loginVal = values => {
    const errors = {};
    if (!values.password) {
        errors.error = 'Password is required';
    }
    else if (!values.username) {
        errors.error= 'Username is required';
    }
    return errors;
};
export const tableValidator = values => {
    const {period_report,total_annual_premium,insuarunce_amount,cash_opening_date} = values
    let errors = {}
    if (!isFinite(period_report)){
        errors.period_report = true
    }
    if (!isFinite(total_annual_premium)){
        errors.total_annual_premium = true
    }
    if (!isFinite(insuarunce_amount)){
        errors.insuarunce_amount = true
    }
    if (isNaN(Date.parse(cash_opening_date))){
        errors.cash_opening_date = true
    }
    return errors
}
export  const pension_funds_validator = values => {
    let errors = {};
    for (let array of Object.entries(values)) {
        const [key,item] = array
        if (key==='open_date' || key==='last_update' ){
            if (isNaN(Date.parse(item))){
                errors[key] = true
                continue
            }
        }

        if (isNull(item)){
            errors[key] = true
        }
    }
    return errors
}