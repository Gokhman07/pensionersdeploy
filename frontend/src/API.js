import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8848',
    withCredentials: true
})
const API = {
    login({username,password}){
        return instance.get(`/pensioner/${username}/${password}`)
    },
    changeTable(data){
        return instance.put('/risk_insurances/update',data)
    },
    getTableData(id){
        return instance.get(`/risk_insurances/getinfo/${id}`)
    },
    getCookie(){
        return instance.get('/pensioner/auth')
    },
    logout(username){
        return instance.put('/pensioner/logout',{username})
    },
    getPensionFunds(id){
        return instance.get(`/pension_funds/${id}`)
    },
    updatePensionFunds(data,id){
        return instance.put(`/pension_funds/${id}`,data)
    },
    getPensionerData(id){
        return instance.get(`pensioner/agent_info/${id}`)
    },
    updatePensionerData(data,id){
        return instance.put('pensioner/agent_info/',{data,id})
    }
}
export default API