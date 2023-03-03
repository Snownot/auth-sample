import React from "react";
import {inject, observer} from "mobx-react";


class Home extends React.Component {

    render(): JSX.Element {
        console.log("Home render")
        return <div>
            Home
        </div>;
    }
}

export default inject(

)(observer(Home));
