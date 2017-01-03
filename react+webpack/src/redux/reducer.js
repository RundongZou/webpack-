// reducer 是用来生成state
const reducer = (state={"list_data": [1, 2, 3]}, active) => {
	//active 事件行为  active.type 事件行为的类型
	switch (active.type) {		
		case "ADD_ITEM":
			var s_len = state.list_data.length;
			//console.log(添加内容)	需要返回一个新的state
			//var new_state = state.list_data
			var new_state = state.list_data;
			new_state.list_data = state.list_data.slice(0)
			new_state.list_data = new_state.list_data.concat((state.list_data.length ? state.list_data.pop() : 0) + 1);
			console.log("判断action的类型，返回新的data----增加数据")
			return new_state;
			break;
		case "DEL_ITEM":
			state.list_data.pop();
			console.log("判断action的类型，返回新的data----删除数据")
			return state;
			break;
		default:
		    return state;
	}
}
export default reducer;