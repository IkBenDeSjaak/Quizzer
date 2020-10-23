import React from "react";
import * as ReactRedux from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NotFound } from "./NotFound";
import { NavBar } from "./NavBar";
import { Help } from "./Help";
import { SignIn } from "./SignIn";
import { WaitPage } from "./WaitPage";
import { QuestionPage } from "./QuestionPage";
import { EndPage } from "./EndPage";

function AppUI() {
  return (
    <Router>
      <div className="navbar">
        <NavBar />
      </div>

      <div className="app">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/wait" component={WaitPage} />
          <Route path="/question" component={QuestionPage} />
          <Route path="/end" component={EndPage} />
          <Route path="/help" component={Help} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

function mapStateToProps(state) {
  return {};
}

export const App = ReactRedux.connect(mapStateToProps)(AppUI);
