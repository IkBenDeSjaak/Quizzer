import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NotFound } from "./NotFound";
import { PageTitle } from "./PageTitle";
import { SignIn } from "./SignIn"

function App() {
  return (
    <Router>
      <div className="navbar">

      </div>

      <div className="app">
        <Switch>
          <Route exact path="/" component={PageTitle} />
          <Route path="/help" component={SignIn} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
