import React from "react";

function RegistreForm() {
  return (
    <div className="login-container">
      <form className="myForm">
        <div className="myform-group">
          <label for="formGroupExampleInput">Username</label>
          <input
            type="text"
            className="form-input"
            id="usernameR"
            placeholder=""
          ></input>
        </div>
        <div className="myform-group">
          <label for="forminput">Email</label>
          <input
            type="email"
            className="form-input"
            id="emailR"
            placeholder=""
          ></input>
        </div>
        <div className="myform-group">
          <label for="formGroupExampleInput">Password</label>
          <input
            type="password"
            className="form-input"
            id="passwordR"
            placeholder=""
          ></input>
        </div>
        <div className="myform-group">
          <label for="formGroupExampleInput">Retype your password</label>
          <input
            type="password"
            className="form-input"
            id="passwordConf"
            placeholder=""
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

export default RegistreForm;
