import {UserPrincipal} from "../model/UserPrincipal";
import {action, makeObservable, observable} from "mobx";

class AuthenticationStore {

    user: UserPrincipal = {
        username: "",
        password: ""
    }

    constructor() {
        makeObservable(this, {
            user: observable,
            changeUserName: action,
            changeUserPassword: action,
        })
    }

    changeUserName = (deltaName:string) => {
        this.user.username = this.user.username + deltaName
    }

    changeUserPassword= (deltaPassword:string) => {
        this.user.password = this.user.password + deltaPassword
    }
}

export default AuthenticationStore;
