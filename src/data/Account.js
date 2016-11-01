/**
 * Created by Jagger on 2016/9/22.
 */
import Server from '../tools/Server';

let thisAccount = null;

export default class Account{
    constructor(info){
        this.info = info;
    }

    static get shared(){
        return thisAccount;
    }

    static login(id, password){

    }

    static logout(){
        thisAccount = null;
    }

}