import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Navigator } from './router'
import "./index.css";

const App = () => (
  <>
    <BrowserRouter>
        <Navigator />
    </BrowserRouter>
    </>
);
ReactDOM.render(<App />, document.getElementById("app"));
