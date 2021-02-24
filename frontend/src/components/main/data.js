import {formatDate} from "../../tools";

const data = {
    rows: [
        ['last_upadete_of_this_screen', 'period_report', 'report_year', 'cash_opening_date',
            'collective_name',
            'pos_type', 'manufacture_name'],
        ['insuarunce_amount', 'total_annual_premium'],
        ['agent_mail', 'agent_phone', 'agent_name', 'insurance_agency_handles'], ['remarks']],
    fields:
        [[['עדכון אחרון של מסך זה', 'last_upadete_of_this_screen'], ['דוח לתקופה', 'period_report'],
            ['שנת דיווח', 'report_year'], ['עד לפתיחת הקופה', 'cash_opening_date'],
            ['שם קולקטיבי', 'collective_name'],
            ['וג קופה', 'pos_type'], ['שם היצרן', 'manufacture_name']],

            [['סכום מבוטח', 'insuarunce_amount'], 
            ['פרמיה שנתית כוללת', 'total_annual_premium']],

            [['אימייל', 'agent_mail'], 
            ['טֵלֵפוֹן', 'agent_post'], ['שם סוכן', 'agent_name'],
                ['Сלֵפוֹן', 
                'insurance_agency_handles']]

            , [['לֵפוֹן', 'remarks']]
        ],
    initialValues: [{period_report : 0
        ,cash_opening_date : formatDate(new Date())},{insuarunce_amount : 0,total_annual_premium: 0},{}]
}
export default data