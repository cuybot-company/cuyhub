import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/cuyhub.scss?v=1.2.0";
import "assets/demo/demo.css";

import IndexComponents from "views/Index_component";
import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={(props) => <IndexComponents {...props} />} />
      <Route
        path="/"
        render={(props) => <Index {...props} />}
      />
      <Redirect from="/" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
