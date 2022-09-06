import LoadableComponent from "../Loadable";

class Utils {

    getRoute = (path: string): any => {
        return {
            path: path,
            exact: true,
            name: 'Login',
            title: 'Login',
            component: LoadableComponent(() => import('../component/Login')),
        }
    };

}

export default new Utils();
