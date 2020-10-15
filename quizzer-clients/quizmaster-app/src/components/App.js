import React from "react";
import * as ReactRedux from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NewQuiz } from "./NewQuiz";
import { NotFound } from "./NotFound";
import { NavBar } from "./NavBar";
import { Help } from "./Help";
import { ApproveTeams } from "./ApproveTeams"

function AppUI() {
  return (
    <Router>
      <div className="navbar">
        <NavBar />
      </div>

      <div className="app">
        <Switch>
          <Route exact path="/" component={NewQuiz} />
          <Route path="/help" component={Help} />
          <Route path="/teams-application" component={ApproveTeams} />
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
