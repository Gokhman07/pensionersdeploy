import {Cell, Input, Item, Table, Header, Title, Link} from '../../sass/table.styles';
import { Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {getTableData, logout, saveTable} from "../../reducers/auth_reducer";
import {formatDate} from "../../tools";
import React, {useState, useEffect} from 'react';
import {tableValidator} from "../../validator";
import {Skeleton,Card} from "antd";
import {NavLink, Redirect} from 'react-router-dom'

const Risk_insurances_table = () => {
    const {id: id_pensioner,username} = useSelector((state) => state.auth);
    const [initialValues, setInitValues] = useState(null)
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
        console.log(data)
        dispatch(saveTable({...data, id_pensioner}))
    }
    const logoutCallback = () =>{
        dispatch(logout(username))
    }
    if  (!username) return <Redirect to={`${process.env.PUBLIC_URL}/login`} />
    if (!toogle) return <Preloader logout={logoutCallback} gtitle={'ביטוח סיכונים'} />
    return <>
        <Title>ביטוח סיכונים</Title>
        <Link onClick={logoutCallback}>Logout</Link>
        <Link two={true} as={NavLink} to={`${process.env.PUBLIC_URL}/pensionfunds`}>
            Pension Funds
        </Link>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={tableValidator}>
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
export const Preloader = ({logout,gtitle}) => (
    <>
    <Link onClick={logout}>Logout</Link>
    <Title>{gtitle}</Title>
    <Card
    style={{ width: 1200, marginTop: 170 ,transform: 'scale(1.5)',margin: '0 auto'}}
>
    <Skeleton loading={true} avatar active>
    </Skeleton>
</Card>
<Card
    style={{ width: 1200, marginTop: 140 ,transform: 'scale(1.5)',margin: '0 auto'}}
>
    <Skeleton loading={true} avatar active>
    </Skeleton>
</Card></>)

const createItem = (title, value, options) => {
    const {handleChange, handleSubmit, values,errors} = options
    return <Item>
        <Header>{title}</Header>
        <Cell><Input onChange={handleChange} onBlur={handleSubmit} value={values[value] || ''}
                     name={value} error={errors[value]}/></Cell>
    </Item>
}

export default Risk_insurances_table