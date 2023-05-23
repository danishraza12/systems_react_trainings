import "../Stylings/signup.css";

import React, { useState } from "react";
import { toast } from "react-toastify";

const Signup = ({ users, setUsers }) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
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
    e.preventDefault();

    const letterRegex = /^[a-z]+$/i;

    if (password.length < 8) {
      setPasswordError("Password should be greater than 8 digits");
      return;
    }
    if (!letterRegex.test(name)) {
      setNameError("Name cannot contain numbers or special characters");
      return;
    }

    const incorrectAttempts = 0;
    user = { name, email, password, homeAddress, cnic, incorrectAttempts };
    const finalList = [user, ...users];
    setUsers(finalList);

    toast.success("Signup successful");
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
              {nameError && <p className="error-msg">{nameError}</p>}
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
              {passwordError && <p className="error-msg">{passwordError}</p>}
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
              <input
                type="file"
                className="file-input"
                onChange={handleCnicChange}
              />
            </div>
          </div>
          <input type="submit" className="button buttonHover" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
