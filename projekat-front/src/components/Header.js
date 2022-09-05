import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img id="logo" src={logo}></img>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link avecti" to="/login">
            <strong>Login</strong>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            <strong>Register</strong>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
