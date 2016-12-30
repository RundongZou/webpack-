import {Header, Content, Footer} from "../components/list_common";
import React, {Component} from  "react";
import ReactDOM from "react-dom";

require("../css/common.css");
require("../css/list.css");

// subheader
class Sub_header extends Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className="sub_header">
				<ul className="class_list">
					{
						this.props.class_ata.map((ele, ind) => <li key={ind}>{ele.className}</li>)
					}
				</ul>
			</div>
		)
	}
}

// 最外面的主体
class List_page extends Component {
	constructor (props) {
		super(props);
		this.state = {
			class_data: [],
			product_data: []
		}
		// subheader获取数据
		$.get("http://datainfo.duapp.com/shopdata/getclass.php", (data) => {
			console.log(data);
			this.setState({
				class_data: data
			})
		}, "json")
		
		// 里面的商品列表  获取数据
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?", {}, (data) => {
			console.log(data);
			this.setState({
				product_data: data
			})
		})
	}
	render () {
		return (
			<div id="login_page">
				<Header/>		
				<Sub_header class_data={this.state.class_data}></Sub_header>
				<Content product_data={this.state.product_data}></Content>
				<Footer/>
			</div>
		)
	}
}

// 整体的render
ReactDOM.render(
	<List_page/>,
	document.getElementById("root")
)

//热替换
if (module.hot) {
  module.hot.accept();
}
