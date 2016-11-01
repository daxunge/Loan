/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from "react";
import {AppRegistry, Navigator} from "react-native";
import BackAndroidTool from "./src/tools/BackTool";

import CustomNavigator from "./src/tools/CustomNavigator";
import Pages from "./src/Pages";
import Manage from "./src/Manage";
import StatisticsPeopleList from "./src/StatisticsPeopleList";
import Feedback from "./src/Feedback";
import Contact from "./src/Contact";
import Settings from "./src/Settings";
import Enroll from "./src/Enroll";
import Addition from "./src/Addition";
import AfterLend from "./src/AfterLend";
import Register from "./src/Register";
import Login from  "./src/Login";
import Calculator from "./src/Calculator";
import ExportData from  "./src/ExportData"
import Book from "./src/Book"
let pages = {
	Pages                : Pages,
	Manage               : Manage,
	StatisticsPeopleList : StatisticsPeopleList,
	Feedback             : Feedback,
	Contact              : Contact,
	Settings             : Settings,
	Enroll               : Enroll,
	Addition             : Addition,
	AfterLend            : AfterLend,
	Register			 : Register,
	Login				 : Login,
	Calculator 		     : Calculator,
	ExportData           :ExportData,
	Book  				 :Book
};

class Loan extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		BackAndroidTool.addBackAndroidListener(this.refs.navigator);
	}

	componentWillUnmount() {
		BackAndroidTool.removeBackAndroidListener();
	}

	render() {
		// return <View><Text>123</Text></View>;
		return (
			<Navigator
				initialRoute={{title: "Pages"}}
				ref="navigator"
				renderScene={(route, navigator) => {
					this.navigator = this.navigator || new CustomNavigator(navigator);
					let Page = pages[route.title];
					return <Page navigator={this.navigator} />;
				}
			}
   />);
	}
}

AppRegistry.registerComponent("Loan", () => Loan);
