import React, {Suspense} from "react";
import {Switch, Redirect} from "react-router-dom";
import {inject, observer} from "mobx-react";
import Utils, {AppRouter} from "../utils/utils";
import ProtectedRoute from "../route/ProtectedRoute";
import InjectNames from "../store/configuration/storeIdentifier";
import * as H from "history";
import Loading from "../loading";
import {Route} from "react-router";

interface IProps {
    routing?: H.History;
}

class AppLayout extends React.Component<IProps> {

    render(): JSX.Element {
        console.log("AppLayout render")
        return <div>
            <Suspense fallback={<Loading/>}>
                {(
                    <Switch>
                        {this.props.routing!.location.pathname === '/' && <Redirect from="/" to={"/login"}/>}
                        {Utils.appRouters
                            .map((route: AppRouter, index: number) => <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={(): JSX.Element => <ProtectedRoute component={route.component}/>}
                            />)}
                    </Switch>
                )}
            </Suspense>
        </div>;
    }
}

export default inject(
    InjectNames.RoutingStore
)(observer(AppLayout));
