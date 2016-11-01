/**
 * Created by Jagger on 16/9/12.
 */
import React from "react";
import TableCell from "./components/TableCell";
import NavigatingComponent from "./components/NavigatingComponent.js";

export default class AfterLend extends NavigatingComponent {

	shouldComponentUpdate(){
		return true;
	}

	configNavigatorBar(){
		return{
			title: "贷后管理",
			left: {
				title: "返回",
				icon:"angle-left"
			}
		};
	}

	renderContainer(){
		return (
			<TableCell
				details="第一季度"
				title="当前季度"
				type="details"
			/>
		);
	}
}
