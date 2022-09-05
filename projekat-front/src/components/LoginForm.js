import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm({ addToken, popup }) {
  const [userData, SetUserData] = useState({
    username: "",
    password: "",
  });
  let navigate = useNavigate();
  const ref = useRef(null);
  const ref2 = useRef(null);

  function handleInput(e) {
    e.preventDefault();
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;

    SetUserData(newUserData);
  }
  function handleLogin(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/login", userData)
      .then((res) => {
        if (res.data.success === true) {
          window.sessionStorage.setItem("auth_token", res.data.access_token);
          addToken(res.data.access_token);
          console.log(res);
          navigate("/");
        } else {
          console.log("unsuccessful login");
          ref.current.value = "";
        }
      })
      .catch((e) => {
        console.log(e);
        popup("Unsuccessful login!");
        ref.current.value = "";
        ref2.current.value = "";
      });
  }
  return (
    <div className="login-container">
      <form className="myForm" onSubmit={handleLogin}>
        <div className="myform-group">
          <label>Username</label>
          <input
            type="text"
            className="form-input"
            ref={ref}
            id="username"
            placeholder="Username"
            name="username"
            onInput={handleInput}
          ></input>
        </div>
        <div className="myform-group">
          <label>Password</label>
          <input
            type="password"
            className="form-input"
            ref={ref2}
            id="paswword"
            placeholder="Password"
            name="password"
            onInput={handleInput}
          ></input>
        </div>
        <div className="myform-group">
          <a>Forgot pasword?</a>
        </div>
        <div className="myform-group">
          <button className="myButton" type="submit" id="login">
            SIGN IN
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
