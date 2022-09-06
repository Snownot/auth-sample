import React from 'react';
import {Route, Switch} from 'react-router-dom';
import utils from "../utils/utils";

const RouterConfiguration = () => {

    const Login = utils.getRoute('/login').component;

    return (
        <Switch>
            <Route path="/login" render={(props) => <Login {...props} />}/>
        </Switch>

    );
}

export default RouterConfiguration;
