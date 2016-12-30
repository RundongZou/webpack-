import React, {Component} from  "react";

// 头部
class Header extends Component {
	constructor (props) {
		super(props);
	}
	render() {
		return (
			<div className="header">
				<ul className="header_list">
	               <li className="header_btn iconfont icon-zuo"></li>
	               <li className="header_tit">列表</li>
	               <li className="header_btn mar_right15">搜索</li>
	           </ul>
			</div>
		)
	}
}

// 主体内容
class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			if_show: false,
			username: "zou",
			pw: "321"		
		}		
	}	
	render() {
		let content_style = {
			"overflow-y": this.props.has_iscroll ? "hidden" : "auto"
		}
		return (
            <div className="content has_sub_header has_footer">
            	<p className="refresh_text">下拉刷新</p>
            	<div className="wraper_scroll" id="wraper_scroll">
            		<div className="scroll">
	            		<ul className="pro_list">{
	            			this.props.product_data.map((ele, ind) => (
	            				<li key={ind} className="pro_item"> 
			                        <a href="###" className="pic"><img src={ele.goodsListImg} alt="" /></a> 
			                        <p className="pro_name">{ele.goodsName}</p>
			                        <p className="price"><em>{ele.price}</em> <del>￥668</del></p> 
			                    </li>
	            			))	            			
	            		}	            			
	            	    </ul>
	            	</div>
            	</div>           	
            </div>		
		)
	}
}

// 底部
class Footer extends Component {
	constructor (props) {
		super(props);
	}
	render() {
		return (			
			<div className="footer">
            	<ul className="footer_list">
            		<li><p className="icon iconfont icon-shouye"></p><p>首页</p></li>
            		<li><p className="icon iconfont icon-fenlei"></p><p>分类</p></li>
            		<li><p className="icon iconfont icon-gouwuche"></p><p>购物车</p></li>
            		<li><p className="icon iconfont icon-my myShow"></p><p>我的</p></li>
            		<li><p className="icon iconfont icon-gengduo"></p><p>更多</p></li>
            	</ul>
			</div>
		)
	}
}

export { Header, Content, Footer }
