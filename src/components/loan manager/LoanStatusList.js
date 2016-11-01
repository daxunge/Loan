/**
 * Created by Jagger on 16/9/10.
 */
import React, {Component} from "react";
import {ListView} from "react-native";
import TableCell from "../TableCell";

export default class LoanStatusList extends Component {
	constructor(props) {
		super(props);
		var ds     = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			people: ds.cloneWithRows(props.people)
		};
	}

	render() {
		return (
			<ListView
				dataSource={this.state.people}
				renderRow={(person)=>(
					<TableCell
						description={person.schedule}
						title={person.name}
						type="indicator"
					/>)}
			/>
	);
	}
}

LoanStatusList.propTypes = {
	people: React.PropTypes.array
};
