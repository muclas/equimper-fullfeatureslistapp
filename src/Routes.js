import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import { HomeView } from "./modules";

export default () => (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/" component={HomeView} />
    </div>
  </Router>
);
