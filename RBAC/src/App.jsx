import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import User from "./pages/User/User";
import UserProfile from "./pages/UserProfile/UserProfile";
const App = () => {
  const name = "Dipak Mudhe";

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/userdata" element={<User />}></Route>
          <Route path="/profile" element={<UserProfile />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

// ui links :  https://i.pinimg.com/enabled_lo_mid/736x/2e/fd/98/2efd982b48027c6b1c05413368cfc0df.jpg
