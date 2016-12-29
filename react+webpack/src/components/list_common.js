import React, {Component} from  "react";
require("../css/common.css");
require("../css/login.css");

class Header extends Component {
	constructor (props) {
		super(props);
	}
	render() {
		return (
			<div className="header">
				<ul className="header_list">
	               <li className="header_btn iconfont icon-zuo"></li>
	               <li className="header_tit">登录</li>
	               <li className="header_btn"></li>
	           </ul>
			</div>
		)
	}
}
class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			if_show: false,
			username: "zou",
			pw: "321"
		}		
	}
	show_pw() {
		this.setState({
			if_show: !this.state.if_show
		})
	}
	filter_pw(e) {
		this.setState({
			pw: e.target.value.replace(/sb/g,"")
		});
		//e.target.value = e.target.value.replace(/sb/g,"")
	}
	filter_username(e) {
		this.setState({
			username: e.target.value.replace(/a/g,"")
		});
	}
	login() {
		console.log(this.state.username);
		console.log(this.state.pw);
	}
	render() {
		var password_type = this.state.if_show ? "text" : "password";
		return (
			 <div className="content">
            	<ul className="login_list">
            		<li>
            			<input type="text" className="username" value={this.state.username} placeholder="请输入用户名" onChange={(ev) => this.filter_username(ev)} / >
            		</li>
            		<li>
            			<input type={password_type} className="password" value={this.state.pw} onChange={(ev) => this.filter_pw(ev)} placeholder="请输入密码" />
            		</li>
            		<li className="ch_item">
            			<label>
            				<input onClick={() => this.show_pw()} type="checkbox" />
            				<span>显示密码</span>
            			</label>
            			<a className="forget">忘记密码？</a>
            		</li>
            		<li className="ch_item">
            			<label>
            				<input type="checkbox" />
            				<span>记住密码</span>
            			</label>
            		</li>
            		<li>
            			<input type="button" className="login_btn" value="登录"/>
            		</li>
            		<li>
            			<a href="reg.html" className="to_reg">注册</a>
            		</li>
            	</ul>
            </div>
		)
	}
}
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
