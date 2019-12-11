import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class Title extends Component {
    render() {
        const { isDisplay, title } = this.props.store;
        return <div>
            {isDisplay && <h1>{title}</h1>}
        </div>
    }
}

export default Title;