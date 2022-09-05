import React, { useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [userData, SetUserData] = useState({
    username: "",
    password: "",
    email: "",
    passwordagain: "",
  });

  const refUN = useRef(null);
  const refPS = useRef(null);
  const refEM = useRef(null);
  const refPSA = useRef(null);

  let navigate = useNavigate();

  function handleInput(e) {
    e.preventDefault();
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;

    SetUserData(newUserData);
  }
  function handleRegister(e) {
    e.preventDefault();
    if (userData.password != userData.passwordagain) {
      console.log("Passwords don't match");
      refPS.current.value = "";
      refPSA.current.value = "";
      return;
    }
    axios
      .post("http://127.0.0.1:8000/api/register", userData)
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((e) => {
        console.log(e);
        refUN.current.value = "";
        refPS.current.value = "";
        refEM.current.value = "";
        refPSA.current.value = "";
      });
  }
  return (
    <div className="login-container">
      <form className="myForm" onSubmit={handleRegister}>
        <div className="myform-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            ref={refUN}
            className="form-input"
            id="usernameR"
            placeholder=""
            onChange={handleInput}
          ></input>
        </div>
        <div className="myform-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            ref={refEM}
            className="form-input"
            id="emailR"
            onChange={handleInput}
            placeholder=""
          ></input>
        </div>
        <div className="myform-group">
          <label>Password</label>
          <input
            type="password"
            className="form-input"
            ref={refPS}
            id="passwordR"
            name="password"
            placeholder=""
            onChange={handleInput}
          ></input>
        </div>
        <div className="myform-group">
          <label>Confirm password</label>
          <input
            type="password"
            name="passwordagain"
            ref={refPSA}
            className="form-input"
            id="passwordConf"
            placeholder=""
            onChange={handleInput}
          ></input>
        </div>

        <div className="myform-group">
          <button className="myButton" type="submit" id="register">
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
