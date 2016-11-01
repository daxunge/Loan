
import React, {Component} from "react";
import {ListView, TouchableNativeFeedback, View, Text, StyleSheet} from "react-native";
import Divider from "./components/Divider";

export default class PeopleList extends Component {
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			people: ds.cloneWithRows(props.people)
		};
	}

	render() {
		return (
			<ListView
				dataSource={this.state.people}
				renderRow={(person, sid, rid) => (
					<TouchableNativeFeedback onPress={() => rid}>
						<View>
							<View style={styles.row}>
								<View style={styles.column}>
									<Text>{"序号:" + person.id}</Text>
									<Text>{"亩数: "+person.area + "亩"}</Text>
									<Text>{"放款额度: " + person.max + "元"}</Text>
								</View>
								<View style={styles.column}>
									<Text>{"姓名:" + person.name}</Text>
									<Text>{"贷款进度: " + person.state}</Text>
								</View>
							</View>
							<Divider />
						</View>
					</TouchableNativeFeedback>)}
			/>
		);
	}
}

const styles = StyleSheet.create({
	row:{
		height: 80,
		flexDirection: "row",
		padding: 8,
		borderRadius: 5
	},
	column:{
		flex: 3,
		alignItems: "flex-start"
	}
});

PeopleList.propTypes = {
	people: React.PropTypes.array
};
