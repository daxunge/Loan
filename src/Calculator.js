/**
 * Created by Administrator on 2016/10/13.
 */
import React, {Component} from 'react';
import {ScrollView, StyleSheet, Alert, Text, TouchableNativeFeedback, View,DatePickerAndroid,} from 'react-native';
import TextInput from './components/form/TextInput';
import Button from 'react-native-scrollable-tab-view/Button.android';
// import RegionPicker from './components/RegionPicker';
    // import Server from './tools/Server';
import NavigatingComponent from './components/NavigatingComponent';

    export default class Calculator extends NavigatingComponent {


        constructor(props) {
            super(props);
            this.state = {
                begintime: new Date(),
                endedtime: new Date(),
                nowtime : "2016-10-14",
                secondtime :"2016-10-14"
            }
        }

        calulator() {
            var temp = ((this.state.endedtime.valueOf()-this.state.begintime.valueOf())/(24*3600*1000))+"";
            var temp2 = parseFloat(temp).toFixed(4)+"";
            var number = "利息结果为："+parseFloat((temp2/365)*this.refs.name.value*this.refs.age.value).toFixed(6);
            Alert.alert(number);
            Alert.alert("计算器结果只作为参考数据，会存在误差");
        }

        async showfristpicker() {
            try {
                const {action, year, month, day} = await
                    DatePickerAndroid.open({
                        // 要设置默认值为今天的话，使用`new Date()`即可。
                        // 下面显示的会是2020年5月25日。月份是从0开始算的。
                        date: new Date()
                    });
                if (action !== DatePickerAndroid.dismissedAction) {
                    // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
                    this.setState({begintime: new Date(year, month, day)})
                    this.setState({nowtime: year +"-"+month+"-"+day});

                }} catch ({code, message}){
                    console.warn('Cannot open date picker', message);
                }

        }

        async showsecondpicker() {
            try {
                const {action, year, month, day} = await
                    DatePickerAndroid.open({
                        // 要设置默认值为今天的话，使用`new Date()`即可。
                        // 下面显示的会是2020年5月25日。月份是从0开始算的。
                        date: new Date()
                    });
                if (action !== DatePickerAndroid.dismissedAction) {
                    // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
                    this.setState({endedtime: new Date(year, month, day)});
                    this.setState({secondtime:year +"-"+month+"-"+day});

                }
            } catch ({code, message}) {
                console.warn('Cannot open date picker', message);
            }
        }

        configNavigatorBar() {
            return {
                title: "利率计算",
                left: {
                    title: "返回",
                    icon: "angle-left"
                }
            };
        }

        renderContainer() {
            return (
                <View style={{padding: 20}}>
                    <TextInput ref="name" title="贷款金额"/>
                    <TextInput ref="phone" title="开始时间" placeholder= "2016-10-14" value ={this.state.nowtime}/>
                    <Button>
                        <View>
                            <Text style={styles.button} onPress={()=>this.showfristpicker()}>选取时间</Text>
                        </View>
                    </Button>
                    <TextInput ref="sex" title="结束时间" placeholder= "2016-10-14"value ={this.state.secondtime}/>
                    <Button>
                        <View>
                            <Text style={styles.button} onPress={()=>this.showsecondpicker()}>选取时间</Text>
                        </View>
                    </Button>
                    <TextInput ref="age" title="利率"/>
                    <Button>
                        <View>
                            <Text style={styles.button} onPress={()=>this.calulator()}>计算</Text>
                        </View>
                    </Button>
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