import {combineReducers, createStore,applyMiddleware} from "redux";
import {reducer as form} from "redux-form";
import thunk from 'redux-thunk';
import auth_reducer from "./reducers/auth_reducer";
import table_reducer from "./reducers/table_reducer";
let reducers= combineReducers({
    form : form,
    auth : auth_reducer,
    table : table_reducer
})

let store = createStore(reducers,applyMiddleware(thunk));

window.state = store.getState

export default store