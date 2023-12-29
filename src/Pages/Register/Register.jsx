import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="container">
        <span className="loginTitle">Register</span>
        <form className="loginForm">
          <label>Username</label>
          <input type="text" placeholder="Enter your name" />
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
          <button className="loginButton">Register</button>
        </form>
        <span className="loginToRegister">
          Already have one? <Link className="link" to="/login"><b>Login</b></Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
