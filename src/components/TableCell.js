/**
 * Created by Jagger on 16/9/12.
 */
import React, {PureComponent} from "react";
import ReactNative from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const {View, Text, TouchableNativeFeedback, StyleSheet} = ReactNative;

export default class TableCell extends PureComponent {
	render() {
		switch (this.props.type) {
		case "basic":
			return (
				<TouchableNativeFeedback onPress={this.props.action}>
					<View style={[cellStyles.cell, this.props.cellStyle, {height: this.props.height}]}>
						<Text style={[basicStyles.title, this.props.titleStyle]}>{this.props.title}</Text>
					</View>
				</TouchableNativeFeedback>);
		case "details":
			return (
				<TouchableNativeFeedback onPress={this.props.action}>
					<View style={[cellStyles.cell, this.props.cellStyle, {height: this.props.height}]}>
						<Text style={[detailsStyles.title, this.props.titleStyle]}>{this.props.title}</Text>
						<Text style={[detailsStyles.details, this.props.detailsStyle]}>{this.props.details}</Text>
					</View>
				</TouchableNativeFeedback>);
		case "indicator":
			return (
				<TouchableNativeFeedback onPress={this.props.action}>
					<View style={[cellStyles.cell, this.props.cellStyle, {height: this.props.height}]}>
						<Text style={[indicatorStyles.title, this.props.titleStyle]}>{this.props.title}</Text>
						<Text style={[indicatorStyles.details, this.props.detailsStyle]}>{this.props.details}</Text>
						<Icon name={this.props.indicator || "angle-right"}
							style={[indicatorStyles.indicator, this.props.indicatorStyle]}
						/>
					</View>
				</TouchableNativeFeedback>);
		default:
			return (
				<TouchableNativeFeedback onPress={this.props.action}>
					<View style={[customStyles.cell, this.props.cellStyle, {height: this.props.height}]}>
						<Text style={[customStyles.title]}>{this.props.title}</Text>
						{this.props.children}
					</View>
				</TouchableNativeFeedback>);
		}
	}
}
TableCell.propTypes = {
	action        : React.PropTypes.func,
	cellStyle     : View.propTypes.style,
	children      : React.PropTypes.any,
	details       : React.PropTypes.string,
	detailsStyle  : View.propTypes.style,
	height        : React.PropTypes.number,
	indicator     : React.PropTypes.string,
	indicatorStyle: View.propTypes.style,
	title         : React.PropTypes.string,
	titleStyle    : View.propTypes.style,
	type          : React.PropTypes.string,
};

const cellStyles = StyleSheet.create({
	cell: {
		alignItems   : "center",
		flexDirection: "row",
		padding: 8
	}
});

const black = "#000000";
const gray  = "#333333";

const basicStyles = StyleSheet.create({
	title: {
		marginLeft: 8,
		fontSize  : 18,
		color     : black,
	}
});

const detailsStyles = StyleSheet.create({
	title  : {
		fontSize  : 18,
		color     : black,
		flex      : 5
	},
	details: {
		fontSize   : 12,
		color      : gray,
		textAlign  : "right",
		flex       : 5
	}
});

const indicatorStyles = StyleSheet.create({
	title    : {
		fontSize  : 18,
		color     : black,
		flex      : 6
	},
	indicator: {
		flex       : 1,
		fontSize   : 18,
		color      : gray,

	},
	details  : {
		fontSize   : 12,
		color      : gray,
		textAlign  : "right",
		flex       : 12
	}
});

const customStyles = StyleSheet.create({
	cell : {
		alignItems   : "center",
		flexDirection: "row"
	},
	title: {
		fontSize  : 18,
		color     : black,
		flex      : 3
	}
});
