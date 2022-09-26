import React, {BaseSyntheticEvent} from "react";
import AuthenticationStore from "../store/AuthenticationStore";
import {inject, observer} from "mobx-react";
import InjectNames from "../store/storeIdentifier";
import {RouteComponentProps} from "react-router-dom";

interface IProps extends RouteComponentProps{
    authenticationStore: AuthenticationStore
}

class Login extends React.Component<IProps>{

    onInputUserName = (event:BaseSyntheticEvent) => {
        const e = event?.nativeEvent as InputEvent;
        if (e.data !== null) {
            this.props.authenticationStore.changeUserName(e.data);
        }

    }

    onInputPassword = (event:BaseSyntheticEvent) => {
        const e = event?.nativeEvent as InputEvent;
        if (e.data !== null) {
            this.props.authenticationStore.changeUserPassword(e.data);
        }
    }

    submitLogin =() => {
        this.props.authenticationStore.submitLogin();
    }

    render() {
        return <div>
            <input onInput={this.onInputUserName}/>
            <input onInput={this.onInputPassword}/>
            <div className={"text-block"}>{this.props.authenticationStore.user.username}</div>
            <div className={"text-block"}>{this.props.authenticationStore.user.password}</div>
            <div>{this.props.authenticationStore.result!.toString()}</div>
            <button onClick={this.submitLogin}>Login</button>
        </div>;
    }
}

export default inject(InjectNames.AuthenticationStore)(observer(Login));
