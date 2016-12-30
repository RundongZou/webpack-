// reducer 是用来生成state
const reducer = (state={"list_data": [1, 2, 3]}, active) => {
	//active 事件行为  active.type 事件行为的类型
	switch (active.type) {
		case "ADD_ITEM":
			//console.log(添加内容)	需要返回一个新的state
			//var new_state = state.list_data
			var new_state = {};
			new_state.list_data = state.list_data.concat(["new data"]) //[1, 2, 3, "new data"]
			console.log("判断action的类型，返回新的data")
			return new_state;
			break;
		default:
		    return state;
	}
}
export default reducer;