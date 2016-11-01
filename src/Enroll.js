/**
 * Created by Jagger on 16/9/12.
 */
import React from "react";
import {View, StyleSheet,NativeModules,Alert} from "react-native";
import Button from "react-native-button";
import TextInput from "./components/form/TextInput";
import NavigationComponent from "./components/NavigatingComponent";
import RegionPicker from './components/RegionPicker';
import Server from './tools/Server';

var save = NativeModules.savefile;
export default class Enroll extends NavigationComponent {

	configNavigatorBar(){
		return{
			title: "报名",
			left: {
				title: "返回",
				icon: "angle-left"
			}
		};
	}

	_handleSubmit(){
		let values = {};
		Object.keys(this.refs).forEach(function (key) {
			values[key] = this.refs[key].value
		}.bind(this));
		save.toecxel(JSON.stringify(values));
		Server.apply(values)
			.then(()=>{
				Alert.alert("申请贷款成功", '');
				this.navigator.pop();
			})
			.catch(err=>Alert.alert("申请贷款失败", err));
	}

	renderContainer(){
		return (
			<View>
				<TextInput title="姓名" ref="name" />
				<TextInput title="手机号" ref="phonenumber" />
				<RegionPicker ref="location"/>
				<TextInput title="身份证" ref="id" />
				<TextInput title="性别" ref="sex" />
				<TextInput title="年龄" ref="age" />
				<TextInput title="房屋结构" ref="houseStruct" />
				<TextInput title="房屋面积" ref="houseSize" />
				<TextInput title="房屋价格" ref="housePrize" />
				<TextInput title="工具种类" ref="toolsKind" />
				<TextInput title="工具数量" ref="toolsNumber" />
				<TextInput title="工具价格" ref="toolsPrize" />
				<TextInput title="土地类型" ref="groundType" />
				<TextInput title="土地数量" ref="groundNumber" />
				<TextInput title="土地年收入" ref="groundIncome" />
				<TextInput title="外包地类型" ref="outerGroundType" />
				<TextInput title="外包地亩数" ref="outerGroundNumber" />
				<TextInput title="外包地收入" ref="outerGroundIncome" />
				<TextInput title="家庭收入" ref="familyIncome" />
				<TextInput title="家庭支出" ref="familyExpand" />
				<TextInput title="家庭利润" ref="familyDiff" />
				<TextInput title="补贴额度" ref="allowance" />
				<TextInput title="养殖类型" ref="farmKind" />
				<TextInput title="养殖数量" ref="farmNumber" />
				<TextInput title="养殖收入" ref="farmIncome" />
				<TextInput title="打工收入" ref="workIncome" />
				<TextInput title="其他收入" ref="otherIncome" />
				<TextInput title="债务" ref="dept" />
				<TextInput title="贷款" ref="loanNumber" />
				<TextInput title="私人贷款" ref="privateNumber" />
				<TextInput title="车辆数量" ref="carNumber" />
				<TextInput title="车辆价值" ref="carPrize" />
				<Button containerStyle={styles.submit} onPress={this._handleSubmit.bind(this)}>
				{"提交"}
			</Button>
			</View>
		);
	}
}

let styles = StyleSheet.create({

	submit: {
		height: 44
	}
});
