import React, { Component } from "react";
import "./App.scss";
import { observer, inject } from "mobx-react";
import Title from "./Title";
import DevTools from "mobx-react-devtools";
import MockTable from "./MockTable/MockTable";

@inject("store")
@observer 
class App extends Component {
    handleChange(event) {
        const { setIsDisplay } = this.props.store;
        setIsDisplay();
    }

    handleInput(event) {
        const { setTitle } = this.props.store;
        setTitle(event.target.value);
    }
    render() {
        const { isDisplay, title, numberOfWords } = this.props.store;
        return (
            <div style={{width: "800px", margin: "auto", textAlign: "center"}}>
                {/* <DevTools />
                <Title /> */}
                <hr />
                {/* <span>Number of Characters: {numberOfWords}</span>
                <hr />
                <span>Is Display?</span>
                <input type="checkbox" checked={isDisplay} onChange={this.handleChange.bind(this)}/>
                <hr />
                <span>Text?</span>
                <input type="text" value={title} onChange={this.handleInput.bind(this)}/> */}
                <MockTable />
                <hr />
            </div>
        )
    }
}

export default App;