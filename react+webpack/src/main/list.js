//系统组件
import React, {Component} from  "react";
import ReactDOM from "react-dom";
import ReactIScroll from "react-iscroll";
//自定义组件
import { Header, Sub_header, Content, Footer } from "../components/list_common";
import Pro_list from "../components/pro_list";
import {scroll_options} from "../config/config";

require("../css/common.css");
require("../css/list.css");

//console.log(ReactIScroll)


// 商品分类列表
class Class_list extends Component {
	constructor (props) {
		super(props);
	}
	handle_click (id) {
		this.props.change_classID(id);
	}
	render () {
		return (
			<ul className="class_list">
				{
					this.props.class_data.map((ele, ind) => <li onClick={() => this.handle_click(ele.classID)} key={ind}>{ele.className}</li>)
				}
			</ul>
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
		// 设置默认的数据请求选项
		this.classID = undefined;
		this.linenumber = 6;
		this.pageCode = 0;
		this.refresh = false;
		
		// 显示蒙层
        $("#loading").show();
		
		// subheader获取数据
		$.get("http://datainfo.duapp.com/shopdata/getclass.php", (data) => {
			// 容错
			if (typeof data === "string") {
				data = JSON.parse(data);
			}
			//console.log(data);
			this.setState({
				class_data: data
			})
		}, "json")
		// 请求商品数据
		this.get_product_data(this.pageCode)	
	}
	
	change_classID (id) {
		this.classID = id;
		this.pageCode = 0; // 重置页面
		this.get_product_data();
	}
	
	get_product_data () {
			// 里面的商品列表  获取数据
			$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?", {
				"classID": this.classID,
				"linenumber": this.linenumber,
				"pageCode": this.pageCode
			}, (data) => {
				// 刷新需要覆盖之前的数据， 加载需要和之前的数据合并
				if (data) {
					console.log(data);
					this.setState({
						product_data: this.pageCode === 0 ? data : this.state.product_data.concat(data) 					
					});
				}	
				$("#loading").fadeOut();
			})
		}
	
		onScrollEnd (myScroll) {
			//myScroll 是ReactIScroll 提供的操作滚动条的对象
			console.log("onScrollEnd");
			console.log(myScroll.y);
			console.log(myScroll.maxScrollY);
			if (this.refresh) {
				this.pageCode = 0;
				this.get_product_data();
				this.refresh = false;
			} else if (myScroll.y - myScroll.maxScrollY < 40) {
				console.log("加载更多");
				this.pageCode ++;
				this.get_product_data();
			}			
		}
	
		onScroll (myScroll) {
			console.log("scroll");
			if (myScroll.y > 60) {
				console.log("刷新");
				this.refresh = true;
			}
		}
		
		fn_change (id) {
			console.log(1)
		}
	
	render () {
		return (
			<div className="page" id="list_page">
				<Header tit="列表"/>		
				<Sub_header>
					<Class_list change_classID={(id)=>this.change_classID(id)}  class_data={this.state.class_data} />
				</Sub_header>
				<Content has_footer={true} has_sub_header={true} has_iscroll={false}>
					<ReactIScroll iScroll={IScroll} 
								  onScrollEnd={(myScroll) => this.onScrollEnd(myScroll)} 								  								  onScroll={(myScroll) => this.onScroll(myScroll)}  								  								  options={scroll_options} >
						<Pro_list product_data={this.state.product_data} />
					</ReactIScroll>					
				</Content>
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
