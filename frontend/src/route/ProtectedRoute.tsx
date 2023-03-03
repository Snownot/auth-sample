import * as React from 'react';
import {inject} from "mobx-react";
import InjectNames from "../store/configuration/storeIdentifier";
import {Route, Redirect} from "react-router";

const ProtectedRoute = ({component: Component, authenticationStore, render, ...rest}: any) => {

    return (
        <Route
            {...rest}
            render={props => {
                console.log(render)
                if (!authenticationStore!.user.isAuthenticated)
                    return (
                        <Redirect to={{pathname: '/login'}}/>
                    );
                return Component ? <Component {...props} /> : render(props);
            }}
        />
    );
};
export default inject(
    InjectNames.AuthenticationStore
)(ProtectedRoute);
