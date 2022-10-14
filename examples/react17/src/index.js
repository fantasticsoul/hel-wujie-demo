import React from "react";
import ReactDOM from "react-dom";
import HelLibProxy from "hel-lib-proxy";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as shareComps from "./share-comps";
import "./index.css";

HelLibProxy.libReady('react17', shareComps);

ReactDOM.render(
  // 严格模式，antd的弹窗会warning
  <App />,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
