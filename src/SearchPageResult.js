import React, {PureComponent} from "react";
import {TouchableNativeFeedback, View, Text, StyleSheet} from "react-native";

export default class Cell extends PureComponent {
	render() {
		return (
			<TouchableNativeFeedback>
				<View style={styles.row}>
					<View style={styles.collumn}>
						<Text>{this.props.location + " " + this.props.name + "农户"}</Text>
						<Text>{"贷款进度：" + this.props.schedule}</Text>
					</View>
					<View style={styles.collumn}>
						<Text>{"状态：" + this.props.state}</Text>
						<Text>{"手机号：" + this.props.phone}</Text>
					</View>
					<View style={styles.collumn}>
						<Text>{"位置：" + this.props.location}</Text>
					</View>
				</View>
			</TouchableNativeFeedback>);
	}
					}

Cell.propTypes = {
	location: React.PropTypes.string,
	phone: React.PropTypes.string,
	name: React.PropTypes.string,
	schedule: React.PropTypes.string,
	state: React.PropTypes.string,
};

const lightgray = "#d3d3d3";

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		padding: 8,
		borderTopColor: lightgray,
		borderTopWidth: 1
	},

	collumn:{
		flex: 1
	}
});
