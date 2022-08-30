import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import reducer from "./reducer/index";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = configureStore({
  reducer,
  devTools: true
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
