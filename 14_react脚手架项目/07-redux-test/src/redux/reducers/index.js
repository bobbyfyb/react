/* 
    该文件用于汇总所有的reducer为一个总的reducer
*/
// 引入combineReducers用于汇总多个reducer
import { combineReducers } from "redux";
import count from "./count";
import person from "./person";

export default combineReducers({
    count,
    person
})

