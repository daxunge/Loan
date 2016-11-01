/**
 * Created by Jagger on 16/9/10.
 */

import React from "react";
import ReactNative from "react-native";
import TableCell from "./components/TableCell";
import NavigationComponent from "./components/NavigatingComponent.js"
;
const {View, } = ReactNative;

export default class ApplyPage extends NavigationComponent {

	configNavigatorBar(){
		return {
			title: "申请贷款"
		};
	}

	renderContainer(){
		return(
			<View style={{padding: 20}}>
				<TableCell
					action={this.navigator.push("Enroll")}
					title="报名"
					type="indicator"
				/>
				<TableCell
					action={this.navigator.push("Addition")}
					title="补充材料"
					type="indicator"
				/>
				<TableCell
					action={this.navigator.push("AfterLend")}
					title="贷后管理"
					type="indicator"
				/>
			</View>
		);
	}
}
