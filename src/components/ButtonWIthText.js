import React, {PureComponent} from "react";
import {TouchableNativeFeedback, View, Text, StyleSheet} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

export default class ButtonWithText extends PureComponent {
	render() {
		return (
			<TouchableNativeFeedback onPress={this.props.action}>
				<View style={styles.default}>
					<Icon
						backgroundColor="white"
						color="black"
						name={this.props.icon}
						size={40}
					/>
					<Text>
						{this.props.title}
					</Text>
				</View>
			</TouchableNativeFeedback>);
	}
}

ButtonWithText.propTypes = {
	action: React.PropTypes.func,
	icon: React.PropTypes.string,
	title: React.PropTypes.string,
};

const styles = StyleSheet.create({
	default: {
		alignItems: "center",
		margin: 30,
		width: 80
	}
});
