/**
 * Created by Jagger on 16/9/10.
 */
import React from "react";
import {
	Text,
	View,
	ListView,
	Alert,
	StyleSheet,
    TextInput
} from "react-native";
import NavigationComponent from "./components/NavigatingComponent";
import SearchPageResult from "./SearchPageResult";
import Server from "./tools/Server";
const config = {
    credentials: true,
};
function urlencodeFormData(fd){
    var s = '';
    function encode(s){ return encodeURIComponent(s).replace(/%20/g,'+'); }

    Object.keys(fd).forEach(function (key) {
        s += (s?'&':'') + encode(key)+'='+encode(fd[key])
    });
    return s;
}


const req_post = function (url0, json) {
    let data = urlencodeFormData(json);
    let url = "http://123.57.254.21:8080/daihao/app/" + url0;
    console.log("fetch POST " +  url + " " + JSON.stringify(data));
    return fetch(url, {
        ...config,
        body: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Character-Set": "UTF-8"
        },
        method: "POST"
    }).then(response=>{
        console.log(response);
        if(response.status >= 400){
            throw response._bodyText;
        }
        else{
            return response
        }
    })
}
export default class SearchPage extends NavigationComponent {

	configNavigatorBar(){
		return{
			title: "搜索"
		};
	}

	dosearch (){
        req_post("search.do",{condition:this.state.Text,targetPage:"1"})
            .then((response) => response.text() )
            .then((responseData)=>{
                var temp = JSON.parse(responseData)
                this.setState({
                    searchResult:this.state.ds.cloneWithRows(temp)
                })

            })
	}
	renderContainer(){
		return(
			<View>
				<TextInput
					placeholder="搜索"
					style={styles.align_center}
					onEndEditing = {()=>this.dosearch()}
					ref="name"
                    onChangeText={(text) => this.setState({Text:text})}
				/>
				<Text style={styles.record_indicator}>
					{"目前" + this.state.searchResult.getRowCount() + "条纪录"}
				</Text>
				<ListView
					enableEmptySections={true}
					dataSource={this.state.searchResult}
					renderRow={(record) =>(
						<SearchPageResult
                            location={record.location}
							phone = {record.phone}
							name={record.name}
                            schedule ={record.schedule}
							state={record.state}
						/>)}
				/>
			</View>
		);
	}

	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
		    ds,
			searchResult: ds.cloneWithRows([]),
            Text,
		};
	}
}

const black = "#000000";

const styles = StyleSheet.create({
	align_center: {
		textAlign: "center"
	},
	record_indicator: {
		textAlign: "center",
		margin: 16,
		color: black
	}
});
