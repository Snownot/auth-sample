import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import utils from "../utils/utils";
import ProtectedRoute from "./ProtectedRoute";
import Loading from "../loading";

const RouterConfiguration = (): JSX.Element => {

    const Login = utils.getRoute('/login').component;
    const AppLayout = utils.getRoute('/').component;

    console.log("RouterConfiguration render")
    console.log("AppLayout", AppLayout)

    return (<Suspense fallback={<Loading/>}>
            <Switch>
                <Route path="/login" exact render={(props: any) => <Login {...props} />}/>
                <ProtectedRoute path="/" exact render={(props: any) => <AppLayout {...props} />}/>
            </Switch>
        </Suspense>
    );
}

export default RouterConfiguration;
