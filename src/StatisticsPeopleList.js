/**
 * Created by Jagger on 16/9/12.
 */
import React from "react";
import NavigatingComponent from "./components/NavigatingComponent";
import PeopleList from "./StatisticsPeopleListItem";
import Server from "./tools/Server";
import Alert from "react-native/Libraries/Utilities/Alert";

export default class StatisticsPeopleList extends NavigatingComponent {

	_handleRefresh(){
		Server.getAllLoan(1)
			.then(all=>console.log(all))
			.catch(err=>Alert.alert("获取列表失败", err))
	}

	configNavigatorBar(){
		return {
			title: "xx 村",
			left:{
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

	renderContainer(){
		return (
			<PeopleList people={[{
				id: "1231231",
				name: "李大傻",
				area: 123,
				state: "已贷款",
				max: "32132141"
			}]} />
		);
	}
}
