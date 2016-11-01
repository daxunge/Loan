/**
 * Created by Jagger on 16/9/12.
 */
import React from "react";
import {View, Dimensions,Platform,Alert,Image,Text, StyleSheet  } from "react-native";
import NavigationComponent from "./components/NavigatingComponent";
import TableCell from "./components/TableCell";
import ImagePicker from 'react-native-image-picker';
import ImagePickerManager from 'react-native-image-picker'
import Button from "react-native-button";
import Server from "./tools/Server";
var {width} = Dimensions.get("window");
const options = {
    title: '选取照片',
    customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};
export default class Addition extends NavigationComponent {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null,
            size: {
                width: width,
                height: 340
            },
            PicSource :null
        };
    }
    _tackPhoto(type) {
        alert("此处朝上 ->");
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                // You can display the image using either data...
                const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
                let selsctedSource = null;
                // or a reference to the platform specific asset location
                if (Platform.OS === 'ios') {
                    selsctedSource = {uri: response.uri.replace('file://', ''), isStatic: true};
                } else {
                    selsctedSource = {uri: response.uri, isStatic: true};
                }
                Alert.alert(response.uri)
                this.setState({
                    avatarSource: source,
                    PicSource : response.uri
                });

            }
        });
    }
    configNavigatorBar() {
        return {
            title: "补充资料",
            left: {
                title: "返回",
                icon: "angle-left"
            }
        };
    }

    renderContainer() {
        return (
            <View>
                <TableCell title="户口本上传"
                           type="indicator"
                           action={this._tackPhoto.bind(this, "户口本")}
                />
                <TableCell title="结婚证上传"
                           type="indicator"
                           action={this._tackPhoto.bind(this, "结婚证")
                           }
                />
                <Text>——————————————已拍到的图片——————————————</Text>
                <Image source={this.state.avatarSource}  style = {this.state.size}/>
                <Button style={styles.button} >
                    <View >
                    <Text style={styles.button} onPress={()=>Server.sendSource(this.state.PicSource)}>上传</Text>
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