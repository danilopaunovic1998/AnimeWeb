import React from "react";
import RegisterForm from "../components/RegisterForm";

function Register({ popup }) {
  return (
    <div className="login-div">
      <RegisterForm popup={popup} />
    </div>
  );
}

export default Register;
