import React, {Component} from "react";
import {StyleSheet, View, ScrollView} from "react-native";
import NavigationBar from "./NavigationBar";


export default class NavigatingComponent extends Component {
	constructor(props) {
		super(props);
		this.navigator = props.navigator;
	}

	shouldComponentUpdate(){
		return true;
	}

	configNavigatorBar(){
		return {
			title: "default"
		};
	}

	push(title){
		this.navigator.push(title);
	}

	pop(){
		this.navigator.pop();
	}

	renderNavigationBar(config){
		let title;
		let left = {};
		let right = {};

		if(config){
			title = config.title;
			left = config.left || {};
			right = config.right || {};
		}

		return (
			<NavigationBar
				leftButtonIcon={left.icon}
				leftButtonTitle={left.title}
				onLeftButtonPress={left.onPress || this.navigator.pop}
				onRightButtonPress={right.onPress}
				rightButtonIcon={right.icon}
				rightButtonTitle={right.title}
				title={title}
			/>);
	}

	render(){
		return (<View style={styles.default}>
			{this.renderNavigationBar(this.configNavigatorBar())}
			<ScrollView style={styles.container}>
				{this.renderContainer()}
			</ScrollView>
		</View>);
	}
}

NavigatingComponent.propTypes = {
	navigator: React.PropTypes.object
};

const white = "#ffffff";

let styles = StyleSheet.create({
	default: {
		backgroundColor: white,
		flex: 1
	},
	container: {
		marginTop: 44,
		backgroundColor: white,
	}
});
