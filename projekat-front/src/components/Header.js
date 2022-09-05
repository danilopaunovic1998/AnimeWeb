import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

function Header({ token, changeToken, popup }) {
  function handleLogout() {
    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/logout",
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));

        window.sessionStorage.setItem("auth_token", null);
        changeToken(null);
        popup("You have successfuly loged out");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <header>
      <img id="logo" src={logo}></img>
      <ul className="nav">
        <li className="nav-item">
          {token == null ? (
            <Link className="nav-link avecti" to="/login">
              <strong>Login</strong>
            </Link>
          ) : (
            <a className="nav-link avecti" onClick={handleLogout}>
              <strong>Logout</strong>
            </a>
          )}
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
