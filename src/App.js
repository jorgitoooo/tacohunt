import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";

// Views
import LogInPage from "./views/LogInPage";
import SignUpPage from "./views/SignUpPage";
import LandingPage from "./views/LandingPage";
import FeedPage from "./views/FeedPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/feed" component={FeedPage} />
        <Route exact path="/login" component={LogInPage} />
        <Route exact path="/signup" component={SignUpPage} />
      </Switch>
    </Router>
  );
}

export default App;
