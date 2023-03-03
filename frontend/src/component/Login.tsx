import React from "react";
import AuthenticationStore from "../store/AuthenticationStore";
import {inject, observer} from "mobx-react";
import InjectNames from "../store/configuration/storeIdentifier";
import {RouteComponentProps} from "react-router-dom";

interface IProps extends RouteComponentProps {
    authenticationStore: AuthenticationStore
}

class Login extends React.Component<IProps> {

    render(): JSX.Element {
        return <div>
                Login
        </div>;
    }
}

export default inject(InjectNames.AuthenticationStore)(observer(Login));
