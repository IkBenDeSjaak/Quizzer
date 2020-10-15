import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NotFound } from "./NotFound";
import { MainPage } from "./MainPage"
import { QuestionPage } from "./QuestionPage"
import { WaitPage } from "./WaitPage"
 
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/wait" component={WaitPage} />
          <Route exact path="/question" component={QuestionPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
