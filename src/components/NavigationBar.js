/**
 * Created by Jagger on 16/9/12.
 */

import React, {Component, PropTypes} from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Dimensions,
	Platform
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

let width = Dimensions.get("window").width;

export default class NavigationBar extends Component {

	static _getStateFromProps(props) {
		let title = props.title;
		let height = props.height;
		let titleColor = props.titleColor;
		let backgroundColor = props.backgroundColor;
		let leftButtonTitle = props.leftButtonTitle;
		let leftButtonTitleColor = props.leftButtonTitleColor;
		let onLeftButtonPress = props.onLeftButtonPress;
		let rightButtonTitle = props.rightButtonTitle;
		let rightButtonTitleColor = props.rightButtonTitleColor;
		let onRightButtonPress = props.onRightButtonPress;
		let leftButtonIcon = props.leftButtonIcon;
		let rightButtonIcon = props.rightButtonIcon;
		return {
			title,
			height,
			titleColor,
			backgroundColor,
			leftButtonTitle,
			leftButtonTitleColor,
			onLeftButtonPress,
			rightButtonTitle,
			rightButtonTitleColor,
			onRightButtonPress,
			leftButtonIcon,
			rightButtonIcon
		};
	}

	componentWillMount() {
		this.state = NavigationBar._getStateFromProps(this.props);
	}

	componentWillReceiveProps(newProps) {
		let newState = NavigationBar._getStateFromProps(newProps);
		this.setState(newState);
	}

	shouldComponentUpdate(_, nextState, context) {
		return JSON.stringify([nextState, context]) !== JSON.stringify([this.state, context]);
	}

	_renderLeftIcon() {
		if (this.state.leftButtonIcon) {
			return (<Icon
				color={this.state.leftButtonTitleColor}
				name={this.state.leftButtonIcon}
				size={24}
				style={styles.leftButtonIcon}
           />);
		}
		return null;
	}

	_renderRightIcon() {
		if (this.state.rightButtonIcon) {
			return (<Icon
				color={this.state.rightButtonTitleColor}
				name={this.state.rightButtonIcon}
				size={24}
				style={styles.rightButtonIcon}
           />);
		}
		return null;
	}

	_onLeftButtonPressHandle(event) {
		let onPress = this.state.onLeftButtonPress;
		typeof onPress === "function" && onPress(event);
	}

	_onRightButtonPressHandle(event) {
		let onPress = this.state.onRightButtonPress;
		typeof onPress === "function" && onPress(event);
	}

	render() {
		let height = Platform.OS === "ios"
			? this.state.height + 20
			: this.state.height;
		return (
			<View style={[
				styles.container, {
					height: height,
					backgroundColor: this.state.backgroundColor
				}
			]}>

				<TouchableOpacity onPress={this._onLeftButtonPressHandle.bind(this)}>
					<View style={styles.leftButton}>
						{this._renderLeftIcon()}
						<Text style={[
							styles.leftButtonTitle, {
								color: this.state.leftButtonTitleColor
							}
						]}>
							{this.state.leftButtonTitle}
						</Text>
					</View>
				</TouchableOpacity>

				<View style={styles.title}>
					<Text numberOfLines={1}
						style={[
							styles.titleText, {
								color: this.state.titleColor
							}
						]}
					>
						{this.state.title}
					</Text>
				</View>

				<TouchableOpacity onPress={this._onRightButtonPressHandle.bind(this)}>
					<View style={styles.rightButton}>
						<Text style={[
							styles.rightButtonTitle, {
								color: this.state.rightButtonTitleColor
							}
						]}>
							{this.state.rightButtonTitle}
						</Text>
						{this._renderRightIcon()}
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}
NavigationBar.propTypes = {
	backgroundColor: PropTypes.string,
	height: PropTypes.number,
	leftButtonTitle: PropTypes.string,
	leftButtonTitleColor: PropTypes.string,
	onLeftButtonPress: PropTypes.func,
	onRightButtonPress: PropTypes.func,
	rightButtonTitle: PropTypes.string,
	rightButtonTitleColor: PropTypes.string,
	title: PropTypes.string.isRequired,
	titleColor: PropTypes.string,

};
NavigationBar.defaultProps = {
	height: 44,
	titleColor: "#000",
	backgroundColor: "#f5f3f4",
	leftButtonTitle: null,
	leftButtonTitleColor: "#000",
	rightButtonTitle: null,
	rightButtonTitleColor: "#000"
};
let styles = StyleSheet.create({
	container: {
		flex: 1,
		position: "absolute",
		top: 0,
		left: 0,
		flexDirection: "row",
		width: width
	},
	leftButton: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		width: 90,
		paddingTop: 1,
		paddingLeft: 8
	},
	leftButtonIcon: {
		marginRight: 6
	},
	leftButtonTitle: {
		fontSize: 15
	},
	title: {
		flex: 1,
		alignItems: "center",
		paddingTop: 1,
		justifyContent: "center",
		width: width - 200,
		overflow: "hidden"
	},
	titleText: {
		fontSize: 18,
		fontWeight: "400"
	},
	rightButton: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		width: 90,
		paddingTop: 1,
		paddingRight: 8
	},
	rightButtonIcon: {
		marginLeft: 6
	},
	rightButtonTitle: {
		fontSize: 15
	}
});

if (Platform.OS === "ios") {
	styles = {
		...styles,
		container: {
			flex: 1,
			position: "absolute",
			top: 0,
			left: 0,
			flexDirection: "row",
			width: width,
			paddingTop: 20
		},
		rightButton: {
			flex: 1,
			flexDirection: "row",
			justifyContent: "flex-end",
			alignItems: "center",
			width: 90,
			paddingTop: 1,
			paddingRight: 8
		}
	};
}
