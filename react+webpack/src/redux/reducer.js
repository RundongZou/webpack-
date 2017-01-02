// reducer 是用来生成state
const reducer = (state={"list_data": [1, 2, 3]}, active) => {
	//active 事件行为  active.type 事件行为的类型
	switch (active.type) {		
		case "ADD_ITEM":
			var s_len = state.list_data.length;
			//console.log(添加内容)	需要返回一个新的state
			//var new_state = state.list_data
			var new_state = state.list_data;
			new_state.list_data = state.list_data.concat(state.list_data[s_len - 1] + 1) //[1, 2, 3, "new data"]
			console.log("判断action的类型，返回新的data----增加数据")
			return new_state;
			break;
		case "DEL_ITEM":
			var	 s_len = state.list_data.length;
			//var new_state = state.list_data.slice(0, s_len - 1);
			var new_state = state.list_data;
			//new_state.list_data = s_len ? state.list_data.pop() : ''; //[1, 2, 3, "new data"]
			new_state = ["a"];
			console.log("判断action的类型，返回新的data----删除数据")
			return new_state;
			break;
		default:
		    return state;
	}
}
export default reducer;