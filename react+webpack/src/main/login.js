import {Header, Content, Footer} from "../components/list_common";
import React, {Component} from  "react";
import ReactDOM from "react-dom";

require("../css/common.css");
require("../css/login.css");


class Login_page extends Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div id="login_page">
				<Header/>
				<Content/>
				<Footer/>
			</div>
		)
	}
}

ReactDOM.render(
	<Login_page/>,
	document.getElementById("root")
)
