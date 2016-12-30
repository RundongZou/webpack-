import {createStore} from "redux";
import reducer from "./reducer";

//创建一个store
const store = createStore(reducer)

//获取state
//console.log(store.getState);

export default store

// 需要创建存储state的仓库
// 创建的时候需要默认的state,（reduce提供）
// 创建完仓库，可以通过getState方法获取
