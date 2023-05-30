import "../Stylings/header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn }) => {
  return (
    <div className="header">
      <p className="heading">Crypto Exchange Assignment Session 1</p>
      <div className="header-right">
        {isLoggedIn === false && (
          <>
            <p>Home</p>
            <p>Login</p>
            <p>About Us</p>
            <Link to="/blogs">
              <p>Blogs</p>
            </Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <p>Dashboard</p>
            <p>Signout</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
