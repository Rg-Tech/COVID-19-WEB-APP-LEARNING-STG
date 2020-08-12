import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Graph from "./components/Graph";
import Nav from "./Nav";
import Footer from "./Footer";
import Symptom from "./components/Symptom";
import Graphics from "./components/Graphics";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/symptom" component={Symptom} />
          <Route path="/graph" component={Graph} />
          <Route path="/about" component={About} />
          <Route path="/graphic" component={Graphics} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;