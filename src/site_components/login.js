import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Form, Button } from "react-bootstrap";

const cookies = new Cookies();

export default function Login() {
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const login_username = document.getElementById("login_username").value;
    const login_password = document.getElementById("login_password").value;

    if (login_username < "   " && login_password < "   ") {
      document.getElementById("login_username").placeholder =
        "Enter a valid username!";
      document.getElementById("login_password").placeholder =
        "Enter a valid password!";
      alert("Form is empty!");
    } else {
      axios
        .post("http://localhost:8000/login", {
          login_username: login_username,
          login_password: login_password,
        })
        .then(function (response) {
          const loginData = response.data;
          cookies.set("Mycookie", loginData);
          window.location.href = "/home";
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  /*I need to figure out how to properly change the login form to a logout button 
  and destroy the jwt-session on click*/
  cookies.get("Mycookie");
  if (cookies === "Mycookie") {
    return (
      <Button
        onClick={cookies.remove("MyCookie")}
        variant="secondary"
        type="submit"
        value="send"
      >
        Logout
      </Button>
    );
  } else {
    return (
      <div className="login">
        <h3 className="padding_element">Login</h3>
        <Form onSubmit={handleLoginSubmit} action="/login" method="post">
          <Form.Group controlId="formGroupEmail">
            <input
              id="login_username"
              type="text"
              name="username"
              placeholder="Enter your username"
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <input
              id="login_password"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </Form.Group>
          <Button variant="secondary" type="submit" value="send">
            Send
          </Button>
        </Form>
      </div>
    );
  }
}
