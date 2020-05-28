import React from "react";
import axios from "axios";

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
      <h3>Create a Profile</h3>
      <form onSubmit={handleSubmit} action="/register" method="post">
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Enter a username"
        />
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Enter an email address"
        />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Define a password"
        />
        <input type="submit" value="send" />
      </form>
    </div>
  );
}
