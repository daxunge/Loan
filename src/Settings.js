/**
 * Created by Jagger on 16/9/12.
 */
import React from "react";
import {View, Picker, StyleSheet} from "react-native";
import NavigatingComponent from "./components/NavigatingComponent";
import TableCell from "./components/TableCell";

export default class Settings extends NavigatingComponent {

	configNavigatorBar(){
		 return {
			title: "设置",
			left: {
				title: "返回",
				icon: "angle-left"
			}
		};
	}

	_updateChanged(c){
		return c;
	}

	renderContainer(){
		return (
			<View>
				<TableCell
					action={this._cleanCache}
					title="一键清除缓存"
					type="basic"
				/>
				<TableCell
					title="软件更新"
					type="custom"
				>
					<Picker
						onValueChange={(type) => this._updateChanged(type)}
						selectedValue={"always"}
						style={styles.flex}
					>
						<Picker.Item
							label="随时更新"
							value="always"
						/>
						<Picker.Item
							label="有wifi时更新"
							value="wifi"
						/>
						<Picker.Item
							label="从不更新"
							value="never"
						/>
					</Picker>
				</TableCell>
				<TableCell
					title="储存位置"
					type="basic"
				/>
				<TableCell
					action={()=>this.navigator.push("Feedback")}
					title="反馈问题"
					type="indicator"
				/>
				<TableCell
					action={()=>this.navigator.push("Contact")}
					title="联系我们"
					type="indicator"
				/>
			</View>
		);
	}

	_cleanCache() {}
}

const styles = StyleSheet.create({
	flex: {
		flex: 7
	}
});
