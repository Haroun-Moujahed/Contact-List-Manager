import { combineReducers } from "redux";
import contactsReducer from "./contactsReducer";

const rootReducer = combineReducers({ contactsReducer });

export default rootReducer;
