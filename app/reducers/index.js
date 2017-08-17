import { combineReducers } from "redux";
import auth from "./auth";
import nav from "./nav";
import campaigns from "./campaigns";

export default combineReducers({ nav, auth, campaigns });
