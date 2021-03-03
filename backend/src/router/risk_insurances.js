const Router = require("express").Router;
const islogin = require("../middleware/index").islogin;
const Risk_insurance = require("../models/risk_insurances");
const Pensioners = require("../models/pensioners");

const router = Router();
const jwt = require('jsonwebtoken')
const moment = require("moment")

router.get("/getinfo/:id", async (req, res) => {
    console.log(req.body)
    const info = await Risk_insurance.findAll({
            where: {

                'id_pensioner': req.params.id
            },
            attributes: ['manufacture_name', 'pos_type', 'collective_name', 'cash_opening_date',
                'report_year', 'period_report', 'last_upadete_of_this_screen', 'total_annual_premium', 'insuarunce_amount',
                'insurance_agency_handles','agent_name', 'agent_post', 'agent_mail', 'remarks'
            ]
        },
    );
    res.send(info);


});
// islogin
router.put("/update", async (req, res) => {
    console.log("UPDATE")
    const {
        id_pensioner, manufacture_name, pos_type, collective_name, cash_opening_date,
        report_year, period_report, last_upadete_of_this_screen, total_annual_premium, insuarunce_amount,
        insurance_agency_handles, agent_name, agent_post, agent_mail, remarks
    } = req.body;
    console.log(id_pensioner)
    const status = await Risk_insurance.update(
        {
            manufacture_name: manufacture_name,
            pos_type: pos_type,
            collective_name: collective_name,
            cash_opening_date: cash_opening_date,
            report_year: report_year,
            period_report: period_report,
            last_upadete_of_this_screen: last_upadete_of_this_screen,
            total_annual_premium: total_annual_premium,
            insuarunce_amount: insuarunce_amount,
            insurance_agency_handles: insurance_agency_handles,
            remarks,
            agent_name, agent_post, agent_mail,
        },
        {
            where: {
                id_pensioner: id_pensioner,
            },
        }
    );
    res.json(ok())
});
const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})


module.exports = router;
