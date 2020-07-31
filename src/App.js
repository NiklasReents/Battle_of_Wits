import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./site_components/home.js";
import Register from "./site_components/register.js";
import Login from "./site_components/login.js";
import About from "./site_components/about.js";
import Characterselection from "./site_components/characterselection.js";
import Battlescreen from "./site_components/battlescreen.js";
import { Button, Navbar, Container } from "react-bootstrap";
import "./App.css";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Container>
        <div className="App">
          <div>
            <Navbar expand="lg" variant="light" bg="light">
              <div>
                <Link className="link navbar_buttons" to="/">
                  <Button
                    variant="secondary"
                    className="padding_element_bottom"
                  >
                    Home
                  </Button>
                </Link>

                <Link className="link navbar_buttons" to="/register">
                  <Button
                    variant="secondary"
                    className="padding_element_bottom"
                  >
                    Register
                  </Button>
                </Link>

                <Link className="link navbar_buttons" to="/login">
                  <Button
                    variant="secondary"
                    className="padding_element_bottom"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </Navbar>
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
            <Link
              className="link"
              to="/about"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <Button variant="secondary" className="padding_element">
                About
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Router>
  );
}
