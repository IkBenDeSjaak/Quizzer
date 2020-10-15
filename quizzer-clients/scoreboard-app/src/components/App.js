import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NotFound } from "./NotFound";
import { MainPage } from "./MainPage"
import { QuestionPage } from "./QuestionPage"
import { AnswersPage } from "./AnwersPage"
import { EndRoundPage } from "./EndRoundPage"
import { EndQuizPage } from "./EndQuizPage"
import { WaitPage } from "./WaitPage"
 
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/wait" component={WaitPage} />
          <Route exact path="/question" component={QuestionPage} />
          <Route exact path="/answers" component={AnswersPage} />
          <Route exact path="/endround" component={EndRoundPage} />
          <Route exact path="/endquiz" component={EndQuizPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
