import React from "react";

function LoginForm() {
  return (
    <div className="login-container">
      <form className="myForm">
        <div className="myform-group">
          <label for="formGroupExampleInput">Username</label>
          <input
            type="text"
            className="form-input"
            id="username"
            placeholder=""
          ></input>
        </div>
        <div className="myform-group">
          <label for="forminput">Password</label>
          <input
            type="password"
            className="form-input"
            id="paswword"
            placeholder=""
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
