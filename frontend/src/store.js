import {combineReducers, createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import auth_reducer from "./reducers/auth_reducer";
let reducers= combineReducers({
    auth : auth_reducer
})

let store = createStore(reducers,applyMiddleware(thunk));

window.state = store.getState

export default store