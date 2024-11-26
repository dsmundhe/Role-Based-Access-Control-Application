import React, { useState } from "react";
import "./DashNavbar.css";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; // For menu icon
import { IoClose } from "react-icons/io5"; // For close icon

const DashNavbar = ({ handleOpenModal }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dash-nav">
      <div className="logo">
        <img src="src/assets/logo.jpg" alt="Logo" />
      </div>

      {/* Menu icon for mobile */}
      <div className="menu-icon" onClick={toggleSidebar}>
        {sidebarOpen ? <IoClose /> : <FiMenu />}
      </div>

      {/* Sidebar links */}
      <div className={`dash-links ${sidebarOpen ? "open" : ""}`}>
        <select>
          <option value="user">Projects</option>
          <option value="admin">Task Manager</option>
          <option value="manager">Soil Monitoring</option>
        </select>
        <select>
          <option value="user">Groups</option>
          <option value="admin">Team - A</option>
          <option value="manager">Team - B</option>
        </select>
        <select>
          <option value="user">Products</option>
          <option value="admin">Product-1</option>
          <option value="manager">Product-2</option>
        </select>
        <select>
          <option value="user">More</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="hr">HR</option>
        </select>
      </div>

      {/* Button to open modal */}

      {/* Search bar */}
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="dash-btn">
        <button onClick={handleOpenModal}>Create Group</button>
      </div>
      {/* Profile link */}
      <Link to="/profile">
        <div className="profile">
          <CgProfile />
        </div>
      </Link>
    </div>
  );
};

export default DashNavbar;
