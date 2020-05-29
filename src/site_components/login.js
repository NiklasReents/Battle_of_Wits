import React from "react";
import axios from "axios";

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
        console.log(response);
        //window.location.href = "/home";
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <h3>Login</h3>
      <form onSubmit={handleLoginSubmit} action="/login" method="post">
        <input
          id="login_username"
          type="text"
          name="username"
          placeholder="Enter your username"
        />
        <input
          id="login_password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <input type="submit" value="send" />
      </form>
    </div>
  );
}
