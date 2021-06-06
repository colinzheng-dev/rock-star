import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalContext from "./context";
import "./global.css";

const root = document.getElementById("root");

ReactDOM.render(
  <GlobalContext>
    <App />
  </GlobalContext>,
  root
);
