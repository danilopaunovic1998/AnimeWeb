import LoginForm from "../components/LoginForm";
import { useState } from "react";
function Login({ addToken, popup }) {
  return (
    <div className="login-div">
      <LoginForm addToken={addToken} popup={popup} />
    </div>
  );
}

export default Login;
