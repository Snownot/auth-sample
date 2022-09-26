import React from "react";
import {Route, RouteComponentProps, Switch} from "react-router-dom";
import {observer} from "mobx-react";
import Utils, {AppRouter} from "../utils/utils";
import ProtectedRoute from "../route/ProtectedRoute";

class AppLayout extends React.Component<RouteComponentProps> {

    render() {
        return <div>
            Hello
            <Switch>
                {Utils.appRouters
                    .filter((route: AppRouter) => !route.isLayout)
                    .map((route: AppRouter, index: number) => <Route
                        exact
                        key={index}
                        path={route.path}
                        render={() => <ProtectedRoute component={route.component}/>}
                    />)}
            </Switch>
        </div>;
    }
}

export default observer(AppLayout)
