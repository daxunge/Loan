import React from "react";
import {StyleSheet, View} from "react-native";

let lightgray = "lightgray";

const styles = StyleSheet.create({
	divider: {
		height: 1,
		backgroundColor: lightgray
	}
});

const divider = <View style={styles.divider} />;

export default function Divider(){
	return divider;
}
