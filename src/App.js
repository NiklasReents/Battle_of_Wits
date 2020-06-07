import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./site_components/home.js";
import Register from "./site_components/register.js";
import Login from "./site_components/login.js";
import About from "./site_components/about.js";
import Characterselection from "./site_components/characterselection.js";
import Battlescreen from "./site_components/battlescreen.js";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link className="link" to="/">
            <button>Home</button>
          </Link>
          <span>|</span>
          <Link className="link" to="/register">
            <button>Register</button>
          </Link>
          <span>|</span>
          <Link className="link" to="/login">
            <button>Login</button>
          </Link>
        </div>
        <Switch>
          <Route path="/battlescreen">
            <Battlescreen />
          </Route>
          <Route path="/characterselection">
            <Characterselection />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <div>
          <Link className="link" to="/about">
            <button>About</button>
          </Link>
        </div>
      </div>
    </Router>
  );
}
