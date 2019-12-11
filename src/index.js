import React from "react";
import ReactDOM from "react-dom";
import rootStore from "./store";
import { Provider } from "mobx-react";
import App from "./components/App";
const store = new rootStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)