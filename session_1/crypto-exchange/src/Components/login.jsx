import "../Stylings/login.css";

import React, { useState } from "react";
import { USERS } from "../Utils/users";

const Login = ({ setLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = USERS?.find((user) => user.email === email);
    console.log(user);

    if (user?.email === email && user?.password === password) {
      setLoginStatus("Logged in");
      setLogin(true);
      return;
    }

    setLoginStatus("Incorrect credentials");
  };
  return (
    <div className="login-form">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <div className="field-container">
            <div className="label-container">
              <label className="label">Email</label>
            </div>
            <div>
              <input
                type="text"
                value={email}
                required
                onChange={handleEmailChange}
              />
            </div>
          </div>

          <div className="field-container">
            <div className="label-container">
              <label className="label">Password</label>
            </div>
            <div>
              <input
                type="text"
                value={password}
                required
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="field-container">
            <label className="login-status">{loginStatus}</label>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
