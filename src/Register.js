/**
 * Created by Jagger on 2016/9/21.
 */
import React, {Component} from 'react';
import {ScrollView, StyleSheet, Alert, Text, TouchableNativeFeedback, View,TouchableWithoutFeedback} from 'react-native';
import TextInput from './components/form/TextInput';
import Button from 'react-native-scrollable-tab-view/Button.android';
import RegionPicker from './components/RegionPicker';
import Server from './tools/Server';
import NavigatingComponent from './components/NavigatingComponent';

export default class Register extends NavigatingComponent {

    _submit() {
        if (this.refs.region.done) {
        }
        Server.checkidentifying(this.refs.phone.value,this.refs.checknumber.value)
            .catch(err=>Alert.alert("验证码错误",err));
        Server.register({
            name: this.refs.name.value,
            phonenumber: this.refs.phone.value,
            sex: this.refs.sex.value,
            age: this.refs.age.value,
            // code: this.refs.code.value,
            location: this.refs.region.value,
            password: this.refs.password.value
        })
            .then(()=>{
                Alert.alert("注册成功！");
                this.pop();
            })
            .catch(err=>Alert.alert("注册失败", err))
    };

    configNavigatorBar(){
        return{
            title: "注册",
            left: {
                title: "返回",
                icon: "angle-left"
            }
        }
    }
    _sendchecknumber(){
        if (this.refs.phone.value){
            Server.identifying(this.refs.phone.value);
        }else{
            Alert.alert("请输入手机号")
        }

    }
    renderContainer(){
        return (
            <View style={{padding: 20}}>
                <TextInput ref="name" title="姓名"/>
                <TextInput ref="phone" title="手机号"/>
                <TextInput ref="sex" title="性别"/>
                <TextInput ref="age" title="年龄"/>
                <TextInput ref="password" title="密码" secureTextEntry ={true}/>
                <RegionPicker ref="region"/>
                <TextInput ref="checknumber" title="获取验证码"/>
                <Button onPress ={()=>this._sendchecknumber()}>
                <View>
                    <Text>获取验证码</Text>
                </View>
                </Button>
                <Button onPress={this._submit.bind(this)}>
                    <View>
                        <Text>注册</Text>
                    </View>
                </Button>
            </View>
        )
    }

};

const styles = StyleSheet.create({
    form: {
        padding: 8
    }
});