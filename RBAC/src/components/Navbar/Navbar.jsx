import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="src\assets\logo.jpg" alt="" />
        </div>
        <div className="nav-btns">
          <Link to="/login">
            {" "}
            <button>Login</button>
          </Link>
          <Link to="/signup">
            {" "}
            <button>Sign up</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
