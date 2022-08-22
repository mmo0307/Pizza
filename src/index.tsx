import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import reducer from "./reducer/index";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = createStore(
  reducer,
  composeWithDevTools()
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
