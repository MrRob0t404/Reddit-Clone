import links from "./linksreducer";
import comments from "./commentreducer"
import { combineReducers } from "redux";

export default combineReducers({ links, comments });
