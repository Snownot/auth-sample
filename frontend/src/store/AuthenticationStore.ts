import {UserPrincipal} from "../domain/model/UserPrincipal";
import {makeObservable, observable} from "mobx";

class AuthenticationStore {

    user: UserPrincipal = {
        username: "",
        password: "",
        isAuthenticated: true
    }

    constructor() {
        makeObservable(this, {
            user: observable,
        })
    }

}

export default AuthenticationStore;
