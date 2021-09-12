import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom";
import { Login } from "./components/Login.js"
import { Signup } from "./components/Singup.js";
import { Reset } from "./components/Reset.js";
import { UrlShortner } from "./components/Urlshortner.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} /> 
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/shorturl" component={UrlShortner} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
