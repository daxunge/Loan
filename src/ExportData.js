/**
 * Created by Administrator on 2016/10/13.
 */
import React, {Component} from 'react';
import {View, ScrollView, Dimensions, StyleSheet,Alert} from "react-native";
import NavigatingComponent from './components/NavigatingComponent';
import TableCell from "./components/TableCell";
export default class ExportData extends  NavigatingComponent{

    configNavigatorBar(){
        return{
            title: "导出数据",
            left: {
                title: "返回",
                icon: "angle-left"
            }
        };
    }
    renderContainer(){
        return (
            <View style={{padding: 20}}>
                <TableCell title="test"
                           type="indicator"
                           action={Alert.alert("test")}
                />
                <TableCell title=""
                           type="indicator"
                           action={Alert.alert("test")}
                />
            </View>
        );
    }
}