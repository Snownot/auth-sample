import React, {BaseSyntheticEvent} from "react";
import AuthenticationStore from "../store/AuthenticationStore";
import {inject, observer} from "mobx-react";
import InjectNames from "../store/storeIdentifier";

interface IProps {
    authenticationStore: AuthenticationStore
}

class Login extends React.Component<IProps>{

    onInputUserName = (event:BaseSyntheticEvent) => {
        const e = event?.nativeEvent as InputEvent;
        this.props.authenticationStore.changeUserName(e.data!);
    }

    onInputPassword = (event:BaseSyntheticEvent) => {
        const e = event?.nativeEvent as InputEvent;
        this.props.authenticationStore.changeUserPassword(e.data!);
    }

    render() {
        return <div>
            <input onInput={this.onInputUserName}/>
            <input onInput={this.onInputPassword}/>
            <div>{this.props.authenticationStore.user.username}</div>
            <div>{this.props.authenticationStore.user.password}</div>
            <button>Login</button>
        </div>;
    }
}

export default inject(InjectNames.AuthenticationStore)(observer(Login));
