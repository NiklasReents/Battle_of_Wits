import React from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    axios
      .post("http://localhost:8000/register", {
        username: username,
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        window.location.href = "/login";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="register">
      <h3 className="padding_element">Create a Profile</h3>
      <Form onSubmit={handleSubmit} action="/register" method="post">
        <Form.Group controlId="formGroupEmail">
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Enter a username"
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Enter an email address"
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Define a password"
          />
        </Form.Group>
        <Button variant="secondary" type="submit" value="send">
          Send
        </Button>
      </Form>
    </div>
  );
}
