import './App.css';
import Signup from "./components/login/login";
import {Switch, Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";
import TableEditablePage from "./components/main/main";
import 'rsuite/lib/styles/index.less'; // or 'rsuite/dist/styles/rsuite-default.css'

function App() {
    const username = useSelector((state) => state.auth.username)
    return (
        <div className="App">
            {!username && <Redirect to={`${process.env.PUBLIC_URL}/login`}/>}
            <Switch>
                <Route path={`${process.env.PUBLIC_URL}/login`} component={Signup}/>
                <Route path={`${process.env.PUBLIC_URL}/mainpage`} component={TableEditablePage}/>
            </Switch>
        </div>
    );
}

console.log('_INITIAL_STATE_')
//global app component

export default App;
