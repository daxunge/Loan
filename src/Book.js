/**
 * Created by Administrator on 2016/10/18.
 */

import React, {Component} from 'react';
import {ScrollView, StyleSheet, Alert, Text, TouchableNativeFeedback,DatePickerAndroid,View} from 'react-native';
import NavigatingComponent from './components/NavigatingComponent';
import Server from './tools/Server';
export default class Book extends NavigatingComponent {

    constructor(props) {
        super(props);
        this.state = {
            number: Server.getphonenumerb()
        }
    }
    configNavigatorBar() {
        return {
            title: "联系我们",
            left: {
                title: "返回",
                icon: "angle-left"
            }
        };
        }
    renderContainer(){
        return (
            <View >
                <Text style = {styles.baseText}> 总部电话： 4000480008</Text>
                <View >
                    <Text style = {styles.baseText}>{"管理员电话"+this.state.number}</Text>
                </View>
            </View>

        );
    }
}
var styles = StyleSheet.create({
    baseText: {
        fontSize: 30,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});