/**
 * Created by Jagger on 16/9/12.
 */
import React from "react";
import {View, Picker, TextInput, StyleSheet,Text,Alert} from "react-native";
import NavigatingComponent from "./components/NavigatingComponent";
import Button from "react-native-button";


export default class Feedback extends NavigatingComponent {
	constructor(props) {
		super(props);
		this.state = {
			type: "software"
		};
	}

	configNavigatorBar(){
		return{
			title: "反馈",
			left: {
				title: "返回",
				icon: "angle-left"
			}
		};
	}

	renderContainer(){
		return(
			<View>
				<Picker
					onValueChange={(type) => this.setState({type: type})}
					selectedValue={this.state.type}
				>
					<Picker.Item label="软件问题"
						value="software"
					/>
					<Picker.Item label="贷款问题反馈"
						value="lending"
					/>
				</Picker>
				<TextInput
					multiline
					placeholder="请输入您的反馈信息"
					style={styles.message}
				/>
				<Button > <View>
					<Text style={styles.button} onPress={()=>Alert.alert("提交成功!谢谢您对我们的支持^_^")}>提交</Text>
				</View></Button>
			</View>
		);
	}
}

const  styles = StyleSheet.create({
	button: {
		fontSize: 20,
		textAlign: 'center'
	},
});