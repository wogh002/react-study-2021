import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { countReducer } from "./module/counter";
import { createStore } from "redux";
import { Provider } from "react-redux";
const store = createStore(countReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
