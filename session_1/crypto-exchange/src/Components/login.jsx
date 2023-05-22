import "../Stylings/login.css";

import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = ({ setLogin, users }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users?.find((user) => user.email === email);
    console.log(user);

    if (user?.email === email && user?.password === password) {
      toast.success("Logged in successfully");
      setLogin(true);
      return;
    }

    toast.error("Incorrect Credentials");
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
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
