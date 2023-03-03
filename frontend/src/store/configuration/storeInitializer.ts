import AuthenticationStore from "../AuthenticationStore";
import {RouterStore} from "mobx-react-router";


export default function initializeStores() {
    return {
        routingStore: new RouterStore(),
        authenticationStore: new AuthenticationStore(),
    };
}
