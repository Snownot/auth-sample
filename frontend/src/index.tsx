import React from 'react';
import {createRoot} from "react-dom/client";
import App from './App';


import reportWebVitals from './reportWebVitals';
//const history = createBrowserHistory({basename: ((window as any).$Env as any).path}!);
//const theme: ThemeOptions = MuiPropsCollection.getStyle()


const root = createRoot(document.getElementById("root") as Element);
root.render(<App/>);


reportWebVitals();
