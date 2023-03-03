import React from "react";

export type AppRouter = {
    path: string,
    title: string,
    /**
     * When true, the active class/style will only be applied if the location is matched exactly.
     */
    exact: boolean,
    component: any;
}

class Utils {

    appRouters: Array<AppRouter> = [
        {
            path: '/',
            title: 'Home',
            exact: true,
            component: React.lazy(() => import(`../component/AppLayout`))
        },
        {
            path: '/login',
            title: 'Login',
            exact: true,
            component: React.lazy(() => import('../component/Login')),
        },

    ];

    getRoute = (path: string): AppRouter => {
        return this.appRouters.filter(route => route.path === path)[0];
    };
}

export default new Utils();
