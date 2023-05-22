import "../Stylings/login.css";

import React, { useState } from "react";

import { USERS } from "../Utils/users";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [cnic, setCnic] = useState();
  const [passwordError, setPasswordError] = useState("");

  let user = {};

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleHomeAddressChange = (e) => {
    setHomeAddress(e.target.value);
  };

  const handleCnicChange = (e) => {
    if (e.target.files) {
      setCnic(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    if (password.length < 8) {
      setPasswordError("Password should be greater than 8 digits");
      return;
    }
    
    user = { name, email, password, homeAddress, cnic };
    USERS.push(user);

    console.log(USERS);

    e.preventDefault();
  };

  
  return (
    <div className="login-form">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h3>Signup</h3>
          <div className="field-container">
            <div className="label-container">
              <label className="label">Name</label>
            </div>
            <div>
              <input type="text" value={name} onChange={handleNameChange} />
            </div>
          </div>
          <div className="field-container">
            <div className="label-container">
              <label className="label">Email</label>
            </div>
            <div>
              <input type="text" value={email} onChange={handleEmailChange} />
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
                onChange={handlePasswordChange}
              />
              <p className="error-msg" style={{ 'fontSize': '10px' }}>{passwordError}</p>
            </div>
          </div>
          <div className="field-container">
            <div className="label-container">
              <label className="label">Home Address</label>
            </div>
            <div>
              <input
                type="text"
                value={homeAddress}
                onChange={handleHomeAddressChange}
              />
            </div>
          </div>
          <div className="field-container">
            <div className="label-container">
              <label className="label">CNIC</label>
            </div>
            <div className="input-container">
              <input type="file" onChange={handleCnicChange} />
            </div>
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
