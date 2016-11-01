import React, {Component} from "react";
import {StyleSheet, TextInput} from "react-native";
import TableCell from "../TableCell.js";

export default class Input extends Component{

	shouldComponentUpdate(){
		return true;
	}

	render(){
		return (
			<TableCell title={this.props.title}>
				<TextInput
					onChangeText={(val)=>this.value = val}
					style={styles.input}
					placeholder= {this.props.placeholder}
					value = {this.props.value}
					secureTextEntry = {this.props.secureTextEntry}
				/>
			</TableCell>
		);
	}
}

Input.propTypes = {
	title: React.PropTypes.string
};

let styles = StyleSheet.create({
	input: {
		flex: 7
	}
});
