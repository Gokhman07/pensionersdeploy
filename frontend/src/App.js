import './App.css';
import Signup from "./components/login/login";
import {Switch, Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";
import 'rsuite/lib/styles/index.less'; // or 'rsuite/dist/styles/rsuite-default.css'
import Table from './components/risk_insurances/risk_insurances_table'
import Sidebar from "./components/sidebar/sidebar";
import 'antd/dist/antd.css';
import Pension_funds_table from "./components/pension_funds/pension_funds_table";

function App() {
    const username = useSelector((state) => state.auth.username)
    return (
        <div className="App">
            {!username && <Redirect to={`${process.env.PUBLIC_URL}/login`}/>}
            {username && <Sidebar />}
            <Switch>
                <Route path={`${process.env.PUBLIC_URL}/login`} component={Signup}/>
                <Route path={`${process.env.PUBLIC_URL}/mainpage`} component={Table}/>
                <Route path={`${process.env.PUBLIC_URL}/pensionfunds`} component={Pension_funds_table} />
            </Switch>
        </div>
    );
}

console.log('_INITIAL_STATE_')
//global app component

export default App;
