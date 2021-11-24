import React from "react";
import ReactDom from "react-dom";
// for ie
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
// local modules
import { App } from "@@containers";
import "./scss/common.scss";

ReactDom.render(<App />, document.getElementById("app"));
