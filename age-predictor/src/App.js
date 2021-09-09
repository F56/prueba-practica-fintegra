import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import Home from "./pages/Home";
import Prediction from "./pages/Prediction";

function App() {
  return (
    <main className="app">
      <Router>
        <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/prediction" component={Prediction} />
        </Switch>
        </Container>
      </Router>
    </main>
  );
}

export default App;
