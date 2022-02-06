//import tool
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import component
import { Form } from "./app/components/form";
import { Project } from "./app/components/project";
import { Navbar } from "./app/components/navbar";
const Root = () => (
  <Router>
    <Navbar />
    <Switch>

      <Route exact path="/" component={App} />
      <Route path="/form" component={Form} />
      <Route path="/project" component={Project} />
    </Switch>
  </Router>
);
ReactDOM.render(<Root />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
