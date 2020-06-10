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

    axios
      .post("http://localhost:8000/login", {
        login_username: login_username,
        login_password: login_password,
      })
      .then(function (response) {
        cookies.set("Mycookie", response.data);
        console.log(cookies.get("Mycookie", response.data));
        window.location.href = "/home";
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
