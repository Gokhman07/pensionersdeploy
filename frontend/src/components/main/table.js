import {Cell, Input, Item, Table, Header,Title} from './table.styles';
import { Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {getTableData, saveTable} from "../../reducers/auth_reducer";
import {formatDate} from "../../tools";
import React, {useState, useEffect} from 'react';

const init = {
    id_pensioner: '',
    manufacture_name: '',
    pos_type: '',
    collective_name: '',
    cash_opening_date: formatDate(new Date()),
    report_year: '',
    period_report: 0,
    last_upadete_of_this_screen: '',
    total_annual_premium: 0,
    insuarunce_amount: 0,
    insurance_agency_handles: '',
    agent_name: '',
    agent_telephone: '',
    agent_mail: '',
    remarks: ''
}

const TableMain = () => {
    const id_pensioner = useSelector((state) => state.auth.id);
    const [initialValues, setInitValues] = useState(init)
    const [toogle, setToggle] = useState(false)
    const dispatch = useDispatch()
    useEffect(async () => {
        const {payload : response} = await dispatch(getTableData(id_pensioner))
        if (!response) {
            return
        }
        setInitValues(response)
        setToggle(true)
    }, [])

    function onSubmit(data) {
        dispatch(saveTable({...data, id_pensioner}))
    }

    if (!toogle) return <></>
    return <>
        <Title>ביטוח סיכונים</Title>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {formik => (
                <>
                    <Table>
                        {createItem('עדכון אחרון של מסך זה', 'last_upadete_of_this_screen', formik)}
                        {createItem('דוח לתקופה', 'period_report', formik)}
                        {createItem('שנת דיווח', 'report_year', formik)}
                        {createItem('עד לפתיחת הקופה', 'cash_opening_date', formik)}
                        {createItem('שם קולקטיבי', 'collective_name', formik)}
                        {createItem('וג קופה', 'pos_type', formik)}
                        {createItem('שם היצרן', 'manufacture_name', formik)}
                    </Table>
                    <Table>
                        {createItem('סכום מבוטח', 'insuarunce_amount', formik)}
                        {createItem('פרמיה שנתית כוללת', 'total_annual_premium', formik)}
                    </Table>
                    <Table>
                        {createItem('אימייל', 'agent_mail', formik)}
                        {createItem('טֵלֵפוֹן', 'agent_post', formik)}
                        {createItem('שם סוכן', 'agent_name', formik)}
                        {createItem('Сלֵפוֹן', 'insurance_agency_handles', formik)}
                    </Table>
                    <Table>
                        {createItem('לֵפוֹן', 'remarks', formik)}
                    </Table>
                </>
            )}
        </Formik>
    </>
}

const createItem = (title, value, options) => {
    const {handleChange, handleSubmit, values} = options
    return <Item>
        <Header>{title}</Header>
        <Cell><Input onChange={handleChange} onBlur={handleSubmit} value={values[value]}
                     name={value}/></Cell>
    </Item>
}

export default TableMain