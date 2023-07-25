import { combineReducers } from "redux";
import balanceReducer from "./balanceReducer";
import counterReducer from './counterReducer';
import loginReducer from "./loginReducer";

const allReducers = combineReducers(
    {
        counter: counterReducer,
        login: loginReducer,
        transaction: balanceReducer
    }
);

export { allReducers }