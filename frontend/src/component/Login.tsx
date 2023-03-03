import React from "react";
import AuthenticationStore from "../store/AuthenticationStore";
import {inject, observer} from "mobx-react";
import InjectNames from "../store/configuration/storeIdentifier";

interface IProps {
    authenticationStore?: AuthenticationStore
}

class Login extends React.Component<IProps> {

    render(): JSX.Element {
        console.log("Login render")
        return <div>
            Login
        </div>;
    }
}

export default inject(
    InjectNames.AuthenticationStore
)(observer(Login));
