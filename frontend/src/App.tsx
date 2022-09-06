import React from 'react';
import {observer} from "mobx-react";
import RouterConfiguration from "./route/RouterConfiguration";

class App extends React.Component {

    public render() {
        return <RouterConfiguration />;
    }
}

export default observer(App);
