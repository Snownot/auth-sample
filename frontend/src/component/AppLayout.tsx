import React from "react";
import {Route, RouteComponentProps, Switch} from "react-router-dom";
import {observer} from "mobx-react";
import Utils from "../utils/utils";
import ProtectedRoute from "../route/ProtectedRoute";

class AppLayout extends React.Component<RouteComponentProps> {

    componentDidMount() {
        this.props.history.push("/login")
    }

    render() {

        return <div>
            <Switch>
                {Utils.appRouters
                    .map((route: any, index: any) => (
                        <Route
                            exact
                            key={index}
                            path={route.path}
                            render={() => <ProtectedRoute component={route.component}/>}
                        />
                    ))}
            </Switch>
        </div>;
    }
}

export default observer(AppLayout)
