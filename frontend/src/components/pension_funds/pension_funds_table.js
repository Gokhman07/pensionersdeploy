import {Cell, Input, Item, Table, Header, Title, GTitle, Link} from '../../sass/table.styles';
import {Formik} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react'
import {getPensionFunds, logout, updatePensionFunds} from "../../reducers/auth_reducer";
import {pension_funds_validator} from "../../validator";
import {ObjectProzentsToInt, ObjectProzentsToIntReverse} from "../../tools";
import API from "../../API";
import {Preloader} from "../risk_insurances/risk_insurances_table";
import {NavLink} from "react-router-dom";


const Pension_funds_table = () => {
    const {id,username} = useSelector(state => state.auth);
    const [initialValues, setValues] = useState(null)
    const [pensionerValues, setPensionerValues] = useState(null)
    const dispatch = useDispatch()
    useEffect(async () => {
        //todo: TEST MODE
        const {payload: response} = await dispatch(getPensionFunds(id));
        setValues(ObjectProzentsToIntReverse(response))
        const another_response = await API.getPensionerData(id);
        console.log(another_response)
        setPensionerValues(another_response.data)
    }, [])
    const submit = (data) => {
        //todo : TEST MODE
        dispatch(updatePensionFunds({data: data, id}))
    }
    console.log(initialValues)
    const pensionersOnsubmit = data => {
        //todo : TEST MODE
        console.log(data)
        API.updatePensionerData(data, id)
    }
    const logoutCallback = () => {
        dispatch(logout(username))
    }
    //open_date,last_update
    if (!initialValues || !pensionerValues)
        return <Preloader logout={logoutCallback}
                          gtitle={'ה.פירוט הפקדות לקרן פנסיה באחוזים'}/>
    return <div>
        <Title color={'#3d484d'}>ה.פירוט הפקדות לקרן פנסיה באחוזים </Title>
        <Link onClick={logoutCallback}>Logout</Link>
        <Link as={NavLink} onClick={logoutCallback} to={`${process.env.PUBLIC_URL}/pensionfunds`}>Logout</Link>
        <Formik initialValues={initialValues} onSubmit={submit} validate={pension_funds_validator}>
            {formik => <>
                <Table>
                    {createItem('עדכון אחרון של מסך זה', 'last_update', formik)}
                    {createItem('תקופה דוח', 'report_period', formik)}
                    {createItem('שנת דוח ', 'report_year', formik)}
                    {createItem('מועד פתיחת קופה ', 'open_date', formik)}
                    {createItem('שם  מעסיק', 'employer_name', formik)}
                    {createItem('מצב קופה ', 'state_box', formik)}
                    {createItem('סוג קופה', 'type_box', formik)}
                    {createItem('שם יצרן', 'manufacture_name', formik)}
                </Table>

                <GTitle>א.תשלומים צפויים מהפוליסה*</GTitle>
                <Table>
                    {createItem('סכום בש"ח', 'amount_in_NIS', formik)}
                </Table>
                <GTitle>ב.תנועות בפוליסה </GTitle>
                <Table>
                    {createItem('סכום בש"ח', 'two_amount_in_NIS', formik)}
                </Table>
                <GTitle>רשום הפקדה אחרונה בדוח</GTitle>
                <Table>
                    {createItem('סה"כ הפקדות', 'total_deposits', formik)}
                    {createItem('פיצוים', 'compensation', formik)}
                    {createItem('אובדן כושר עבודה', 'loss_workcapacity', formik)}
                    {createItem('תגמולי מעסיק', 'employer_benefits', formik)}
                    {createItem('משכרות', 'employee_benefits', formik)}
                    {createItem('משכרות', 'salary', formik)}
                    {createItem('עבור חודש משכורת', 'month_salary', formik)}
                </Table>
                <Table>
                    {createItem('סה"כ הפקדות', 'perc_total_deposits', formik, '#47694e')}
                    {createItem('פיצוים', 'perc_compensation', formik, '#47694e')}
                    {createItem('אובדן כושר עבודה', 'perc_loss_workcapacity', formik, '#47694e')}
                    {createItem('תגמולי מעסיק', 'perc_employer_benefits', formik, '#47694e')}
                    {createItem('משכרות', 'perc_employee_benefits', formik, '#47694e')}
                    {createItem('משכרות', 'perc_salary', formik, '#47694e')}
                    {createItem('עבור חודש משכורת', 'perc_month_salary', formik, '#47694e')}
                </Table>
            </>
            }
        </Formik>
        <Formik initialValues={pensionerValues}
                onSubmit={pensionersOnsubmit}>
            {formik =>
                <>
                    <Table>
                        {createItem('דוא"ל', 'agent_mail', formik)}
                        {createItem('טלפון', 'agent_telephone', formik)}
                        {createItem('שם  סוכן', 'agent_name', formik)}
                        {createItem('סוכנות ביטוח מטפלת', 'insurance_agency', formik)}
                    </Table>
                    <Table>
                        {createItem('הערות', 'remarks', formik)}
                    </Table>
                </>
            }
        </Formik>
    </div>
}


const createItem = (title, value, options, color = '#6b879c') => {
    const {handleChange, handleSubmit, values, errors} = options
    return <Item>
        <Header color={color}>{title}</Header>
        <Cell><Input onChange={handleChange} onBlur={handleSubmit} value={values[value]}
                     name={value} error={errors[value]}/></Cell>
    </Item>
}
export default Pension_funds_table