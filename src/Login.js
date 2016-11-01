import React from "react";
import {View} from "react-native";
import TextInput from './components/form/TextInput';
import Button from "react-native-button";
import NavigatingComponent from './components/NavigatingComponent';
import Server from './tools/Server';
import Alert from "react-native/Libraries/Utilities/Alert";

export default class Login extends NavigatingComponent{

	configNavigatorBar(){
		return{
			title: "登陆",
			left: {
				title: "返回",
				icon: "angle-left"
			},
			right: {
				title: "注册",
				icon: "angle-right",
				onPress: this.navigator.push("Register")
			}
		}
	}

	_handleLogin(){
		Server.login({
			username: this.refs.account.value,
			password: this.refs.password.value
		})
			.then(res=>{
				Alert.alert("登录成功", res);
				this.navigator.pop();
			})
			.catch(err=>Alert.alert("登录失败", err))
	}

	renderContainer(){
		return(
			<View style={{padding: 20}}>
				<TextInput title={"帐号"} ref="account" />
				<TextInput title={"密码"} ref="password" secureTextEntry ={true}/>
				<Button style={{margin: 30}} onPress={()=>this._handleLogin()}>{"登陆"}</Button>
			</View>
		);
	}
}
