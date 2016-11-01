// const fetch = null;
// todo: delete this
"use strict";

import {Alert} from 'react-native';

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
};
const req_get = function (url0, json) {
    let data = urlencodeFormData(json);

    let url = "http://123.57.254.21:8080/daihao/app/" + url0 + "?" + data;
    console.log("fetch GET " + url);
    return fetch(url, {
        ...config,
        method: "GET"
    }).then(response=>{
        console.log(response);
        if(response.status >= 400){
            throw response._bodyText;
        }
        else{
            return response
        }
    });
};
export default {

    registerGetCheckCode(data){
        return req_get("account/register/checkcode", data)
    },

    identifying(phonenumber){
        req_post("regiCheck.do",{phone :phonenumber.toString()})
            .then((response) => response.text() )
            .then((responseData)=>{
              var data = JSON.parse(responseData)
                if  (data.error === "0"){
                  Alert.alert(phonenumber.toString())
                    req_post("identifying.do",{phone :phonenumber})
                    Alert.alert("验证码有效时间五分钟");
                }
                else {
                    Alert.alert("该手机号已被占用");
                }
            })
            .catch((error)=>{console.error('error',error)});

    },
    checkidentifying(phonenumber,identifying){
        return new  Promise((acccpt,reject)=>{
            if (identifying&&phonenumber){
                req_post("checkIdentifying.do",{phone :phonenumber,identifying:identifying})
                    .then(()=>acccpt())
                    .catch(err=>reject(err))
            }else {
                reject("请输入验证码");
            }
        })
    },
    register(data){
        return new Promise((accept, reject)=> {
                if (data.name &&
                    data.sex &&
                    // data.id &&
                    // data.code &&
                    data.age &&
                    data.location &&
                    data.phonenumber &&
                    data.password) {
                    req_post("register.do", data)
                        .then(()=>accept())
                        .catch(err=>reject(err))
                }
                else {
                    reject("注册信息不完整");
                }
            }
        )
    },

    sendSource(picsource) {
        let formData = new FormData();
        let picture = {uri : picsource,type: 'multipart/form-data', name:new Date().toString()+".jpg"}
        formData.append("file0",picture);
        let url = "http://123.57.254.21:2048"
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'multipart/form-data',
            },
            body:formData,
        })
            .then((response) => response.text() )
            .then((responseData)=>{
                var hash = JSON.parse(responseData)
                Alert.alert(hash.file0.sha1)
                req_post("addPhoto.do",{hash:hash.file0.sha1})
                console.log('responseData',responseData);
            })
            .catch((error)=>{console.error('error',error)});
    },
    login(data){
        console.log({name: 'login', data: data});
        return new Promise((accept, reject)=>{
            if(data.username &&
                data.password){
                req_post("login.do", data)
                    .then(()=>accept())
                    .catch(err=>reject(err))
            }
            else{
                reject("请输入用户名密码");
            }
        })
    },

    info(){
        return req_get('')
    },
    getserchinfo(data){

           req_post("search.do",data)
                .then((response) => response.text() )
                .then((responseData)=>{

                })
    },
    getLocation(current){
        return req_get("getArea.do", {tpye: "", select: current})
            .then((res)=>res.json());
    },

    apply(data){
        return req_post("applyLoan.do", data)
    },

    getLoanState(){
        return req_get("getLoanState.do", {}).then(res=>res.json())
    },

    getAllLoan(page){
        return req_get("getAllLoan.do", {targetPage: page}).then(res=>res.json())
    },
    getphonenumerb (){
        return req_get("getLianLuoRen.do",{})
    }
};

