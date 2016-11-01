/**
 * Created by Jagger on 16/9/10.
 */

import React from "react";
import {ListView, View,Alert} from "react-native";
import NavigatingComponent from "./components/NavigatingComponent";
import TableCell from "./components/TableCell";
import Divider from "./components/Divider";
import fecha from "fecha";

import Server from "./tools/Server";
const config = {
	credentials: true,
};
function urlencodeFormData(fd){
	var s = '';
	function encode(s){ return encodeURIComponent(s).replace(/%20/g,'+'); }

	Object.keys(fd).forEach(function (key) {
		s += (s?'&':'') + encode(key)+'='+encode(fd[key])
	});
	return s;
}


const req_post = function (url0, json) {
	let data = urlencodeFormData(json);
	let url = "http://123.57.254.21:8080/daihao/app/" + url0;
	console.log("fetch POST " +  url + " " + JSON.stringify(data));
	return fetch(url, {
		...config,
		body: data,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"Character-Set": "UTF-8"
		},
		method: "POST"
	}).then(response=>{
		console.log(response);
		if(response.status >= 400){
			throw response._bodyText;
		}
		else{
			return response
		}
	})
}
export default class MessagePage extends NavigatingComponent {

	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this._messages = [
		];
		this.state = {
			ds,
			messages: ds.cloneWithRows(this._messages)
		};
	}

	configNavigatorBar(){
		return {
			title: "信息",
			right: {
				icon: "refresh",
				onPress: ()=>{this.getmessage();}
			}
		};
	}

	getmessage(){
		req_post("getAds.do",{})
			.then((response) => response.text() )
			.then((responseData)=>{
				this._messages = JSON.parse(responseData)
				this.setState({
					messages:this.state.ds.cloneWithRows(this._messages)

				})
			})
	}

	renderContainer(){
		return (
			<ListView
				dataSource={this.state.messages}
			    enableEmptySections = {true}
			    renderRow={(message) =>(
					<View>
						<TableCell
							details={
								message.ads
							}
							title={
								message.location
							}
							type="details"
						/>
					</View>
					)}
			/>
		);
	}

	test(){
		// this._messages.push({
		// 	content: "开始测试",
		// 	time: fecha.format(new Date(), "YYYY年 MM月 DD日 hh:mm:ss(调试)")}
		// );
		// this.setState({
		// 	messages: this.state.messages.cloneWithRows(this._messages)
		// });
		// Server.test()
		// 	.then((response)=>{
		// 		this._messages.push({
		// 			content: JSON.stringify(response.status),
		// 			time: fecha.format(new Date(), "YYYY年 MM月 DD日 hh:mm:ss(调试)")}
		// 		);
		// 		this.setState({
		// 			messages: this.state.messages.cloneWithRows(this._messages)
		// 		});
		// 	})
		// 	.catch((err)=>{
		// 		this._messages.push({
		// 			content: JSON.stringify(err),
		// 			time: fecha.format(new Date(), "YYYY年 MM月 DD日 hh:mm:ss(调试)")}
		// 		);
		// 		this.setState({
		// 			messages: this.state.messages.cloneWithRows(this._messages)
		// 		});
		// 	});
	}
}
