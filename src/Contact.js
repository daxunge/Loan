/**
 * Created by Jagger on 16/9/12.
 */
import React from "react";
import {View} from "react-native";
import TableCell from "./components/TableCell";
import NavigationComponent from "./components/NavigatingComponent";

export default class Contact extends NavigationComponent {

	configNavigatorBar(){
		return{
			title: "联系我们",
			left: {
				title: "返回",
				icon: "angle-left"
			}
		};
	}

	renderContainer(){
		return (
			<View>
				<TableCell
					details="400-12345678"
					title="总部电话"
					type="details"
				/>
				<TableCell
					details="1234567890"
					title="管理员电话"
					type="details"
				/>
			</View>
		);
	}
}
