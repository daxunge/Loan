/**
 * Created by Jagger on 16/9/12.
 */
import React from "react";
import NavigatingComponent from "./components/NavigatingComponent";
import LoanStatusList from "./components/loan manager/LoanStatusList";
import Server from './tools/Server';
import Alert from "react-native/Libraries/Utilities/Alert";
import {ListView} from "react-native";
import TableCell from "./components/TableCell";

export default class Manage extends NavigatingComponent {

	constructor(props){
		super(props);
		var ds     = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			people: ds.cloneWithRows([])
		};
	}

	configNavigatorBar(){
		return {
			title: "贷款管理",
			left: {
				title: "返回",
				icon: "angle-left"
			},
			right: {
				title: "刷新",
				icon: "refresh",
				onPress: this._handleRefresh.bind(this)
			}
		};
	}
	_handleRefresh(){
		Server.getLoanState()
			.then(states=>{
				this.setState({
					people: this.state.people.cloneWithRows(states)
				})
			})
			.catch(err=>Alert.alert("获取列表失败", err));
	}

	renderContainer(){
		return (
			<ListView
				enableEmptySections = {true}
				dataSource={this.state.people}
				renderRow={(person)=>(
					<TableCell
						details={person.schedule}
						title={person.name}
						type="details"
					/>)}
			/>
		);
	}
}
