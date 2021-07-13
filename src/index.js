import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules"; //index생략가능
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
