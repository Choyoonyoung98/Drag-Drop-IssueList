import React, { Component } from "react";
import Issue from "./components/issue/Issue";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" component={Issue} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
