import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="container">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
          <button className="loginButton">Login</button>
        </form>
        <span className="loginToRegister">
          Don't have one? <Link className="link" to="/register"><b>Register</b></Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
