import React from 'react';
import {createRoot} from "react-dom/client";
import App from './App';


import reportWebVitals from './reportWebVitals';
//const history = createBrowserHistory({basename: ((window as any).$Env as any).path}!);
//const theme: ThemeOptions = MuiPropsCollection.getStyle()


const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(<App/>);

reportWebVitals();
