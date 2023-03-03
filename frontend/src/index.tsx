import React from 'react';
import './index.css';
import App from './App';
import {Provider} from 'mobx-react';
import {createRoot} from "react-dom/client";
import {Router} from 'react-router';
import {createBrowserHistory} from 'history';
import {RouterStore, syncHistoryWithStore} from 'mobx-react-router';
import reportWebVitals from "./reportWebVitals";
import initializeStores from "./store/configuration/storeInitializer";

const routingStore = new RouterStore();
const rootElement = document.getElementById("root");

if (rootElement !== null) {
    const root = createRoot(rootElement);
    const browserHistory = createBrowserHistory({basename: process.env.PUBLIC_URL});
    const stores = {
        routing: routingStore,
        ...initializeStores()
    };
    const history = syncHistoryWithStore(browserHistory, stores.routing);

    root.render(
        <Provider {...stores}>
            <Router history={history}>
                <App/>
            </Router>
        </Provider>
    );
}

reportWebVitals();
