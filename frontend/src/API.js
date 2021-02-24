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
    }
}
export default API