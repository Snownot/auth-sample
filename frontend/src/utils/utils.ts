import LoadableComponent from "../Loadable";

export type AppRouter = {
    path: string,
    name: string,
    /**
     * When true, the active class/style will only be applied if the location is matched exactly.
     */
    exact: boolean,
    title: string,
    component: any
}

class Utils {

    appRouters: Array<AppRouter> = [
        {
            path: '/',
            name: 'Home',
            exact: true,
            title: 'Home',
            component: LoadableComponent(() => import('../component/AppLayout')),
        },
        {
            path: '/login',
            exact: true,
            name: 'Login',
            title: 'Login',
            component: LoadableComponent(() => import('../component/Login')),
        },

    ];

    getRoute = (path: string): AppRouter => {
        return this.appRouters.filter(route => route.path === path)[0];
    };
}

export default new Utils();
