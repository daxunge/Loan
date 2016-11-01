/**
 * Created by Jagger on 16/9/13.
 */
import React, {Component} from "react";
import ReactNative, {View, Text, ListView, StyleSheet, Alert,Picker} from "react-native";
import TableCell from "./TableCell.js";
import Server from "../tools/Server";
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
const levels = ["省", "市", "乡", "镇", "村"];

function nextLevel(current){
	for(let i=0; i<levels.length; i++){
		if(levels[i] == current){
			return levels[i+1];
		}
	}
	return null;
}

export default class RegionPicker extends Component {

	constructor() {

		super();
		let ds = this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			region: "",
			level: 0,
			regions: ds.cloneWithRows([])
		};

		this._selectRegion("黑龙江");
	}

	shouldComponentUpdate(){
		return true;
	}

	_finish(){
		this.state.selected = [];
	}

	_selectRegion(region){
		Server.getLocation(region)
			.then((regions)=>{
				console.log(regions);
				this.setState({
					region: this.state.region + (region == "黑龙江" ? region : "_" + region),
					regions: this.ds.cloneWithRows(regions.map(value=>{console.log(value.name); return value.name;}))
				})
			})
			.catch(err=>Alert.alert("获取" + region + "地址列表失败", JSON.stringify(err)))
	}

	render() {
		return (<View>
			<Text style={styles.text}> {"地址: " + this.state.region} </Text>
			<Text style={styles.text}> {"选择地址:" } </Text>
			<ListView
				enableEmptySections = {true}s
				dataSource={this.state.regions}
				renderRow={(region)=>(
					<TableCell
						action={this._selectRegion.bind(this, region)}
						title={region}
						type="basic"
					/>)}
			/>
		</View>);
	}

	get value(){
		return this.state.region.substr(this.state.region.indexOf("_") + 1);
	}

	get done(){
		return this.state.regions.getRowCount() == 0;
	}
}

const black = 'black';

const styles = StyleSheet.create({
	text: {
		color: black,
		fontSize: 18
	}
});