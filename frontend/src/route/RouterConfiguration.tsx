import React from 'react';
import {Route, Switch} from 'react-router-dom';
import utils from "../utils/utils";
import ProtectedRoute from "./ProtectedRoute";

const RouterConfiguration = (): JSX.Element => {

    const Login = utils.getRoute('/login').component;
    const AppLayout = utils.getRoute('/').component;

    return (
        <Switch>
            <Route path="/login" render={() => <Login />}/>
            <ProtectedRoute path="*" render={() => <AppLayout />}/>
        </Switch>

    );
}

export default RouterConfiguration;
