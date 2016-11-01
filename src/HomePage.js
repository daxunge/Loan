/**
 * Created by Jagger on 16/9/10.
 */

import React, {Component} from "react";
import {View, ScrollView, Dimensions, StyleSheet,Alert,NativeModules,Image,Text} from "react-native";
import Carousel from "react-native-looped-carousel";
import ButtonWithText from "./components/ButtonWIthText.js";
import NavigatingComponent from './components/NavigatingComponent';
var {width} = Dimensions.get("window");
let carouselHeight = 340;
var ZIP = NativeModules.ZIP;
var save = NativeModules.savefile;
export default class HomePage extends NavigatingComponent {
	constructor(props) {
		super(props);
		this.state = {
			size: {
				width: width,
				height: carouselHeight
			}
		};
	}

	shouldComponentUpdate(){
		return true;
	}

	_onLayoutDidChange(e) {
		var layout = e.nativeEvent.layout;
		this.setState({
			size: {
				width: layout.width,
				height: carouselHeight
			}
		});
	}

	configNavigatorBar(){
		return {
			title: "贷号",
			right: {
				title: "登陆",
				icon: "user",
				onPress: this.navigator.push("Login")
			}
		};
	}
	exportdate (){

		var flag =  ZIP.Packagezip();
		if (flag === false){
			Alert.alert("导出失败！");
		}else{
			Alert.alert("导出成功！请到内存设备中");
		}
	}
	renderContainer(){
		return (
			<View
				onLayout={this._onLayoutDidChange.bind(this)}
				style={styles.container}
			>
				<Carousel
					animate ={true}
					hideIndicators={false}
					delay={10000}
					style={this.state.size}
					loop = {true}

				>
					<View style={this.state.size} >
						<Image style={this.state.size} source = {{uri:'http://123.57.254.21:8080/daihao/ppt/0.jpg  '}}/>
					</View>
					<View style={this.state.size} >
						<Image style={this.state.size} source = {{uri:'http://123.57.254.21:8080/daihao/ppt/1.jpg  '}}/>
					</View>
					<View style={this.state.size}>
						<Image style={this.state.size} source = {{uri:'http://123.57.254.21:8080/daihao/ppt/2.jpg  '}}/>
					</View>

				</Carousel>
				<View style={styles.layout}>
					<ButtonWithText
						action={this.navigator.push("Manage")}
						icon="group"
						title="贷款管理"
					/>
					<ButtonWithText
						action={this.navigator.push("Feedback")}
						icon="question-circle"
						title="问题反馈"
					/>
					<ButtonWithText
						action= {()=>this.exportdate()}
						icon="share"
						title="导出数据"
					/>
				</View>
				<View style={styles.layout}>
										<ButtonWithText
											action={this.navigator.push("Calculator")}
											icon="calculator"
											title="利率计算"
										/>
					<ButtonWithText
						action={this.navigator.push("Book")}
						icon="book"
						title="联系我们"
					/>
				</View>

			</View>
		);
	}
}
const white = "#fff";

const styles = StyleSheet.create({
	container: {
		backgroundColor: white
	},
	layout : {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},
});

HomePage.propTypes = {
	navigator: React.PropTypes.object
};
