import React from "react";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header>
      <img id="logo" src={logo}></img>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="#!">
            <strong>Login</strong>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">
            <strong>Register</strong>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
