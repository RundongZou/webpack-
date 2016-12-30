import React, {Component} from "react";
import ReactDOM from "react-dom";
// 通过仓库获取state
import store from "./store";
require ("../css/style.css");

class List extends Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<ul className="list">
				{
					this.props.list_data.map((ele, ind)=> <li key={ind}>{ele}</li>)
				}
			</ul>
		)
	}
}

class My_button extends Component {
	constructor (props) {
		super(props)
	}
	fn_click () {
		//console.log(this)
		var Action = {
			type: "ADD_ITEM"
		};
		console.log('触发action')
		store.dispatch(Action)
		
	}
	
	render () {
		return (
			<button onClick={() => this.fn_click()}>{this.props.children}</button>
		)
	}
}


class List_wrap extends Component {
	constructor (props) {
		super(props)
		this.state = store.getState();		
	}
	componentWillMount () {
		// 监听
		store.subscribe(() => {
			//console.log(222)
			//获取最新的state
			console.log("state更新，最新的state是：  " + store.getState()) 
			//	更新顶层组件的state
			this.setState({
				list_data: store.getState().list_data
			})
		})
	}
	render () {
		return (
			<div className="wrap">
				<List list_data={this.state.list_data}/>
				<My_button />
			</div>
		)
	}
}

ReactDOM.render(
	<List_wrap />,
	document.getElementById("root")
)
