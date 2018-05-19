import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import { HomeView, Login, Signup, Page404 } from "./modules";

export default () => (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/" component={HomeView} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route exact component={Page404} />
    </div>
  </Router>
);
