import React from "react";
import DashNavbar from "../../pages/Dashboard/DashNavbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import MyGroups from "../../components/MyGroups/MyGroups";
const UserProfile = () => {
  const user = useSelector((state) => state.user.loginInfo);

  const defaultProfile = {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Guest",
    image:
      "https://i.pinimg.com/736x/dd/e7/a3/dde7a3235d2c4eabd41c66bd96ee8e08.jpg",
  };

  const profile = user || defaultProfile;

  const getRoleSpecificInfo = (role) => {
    switch (role) {
      case "admin":
        return (
          <>
            <p className="role-info">
              📋 Can manage users, roles, and system settings.
            </p>
            <p className="role-info">
              🔐 Full access to all features and data.
            </p>
          </>
        );
      case "manager":
        return (
          <>
            <p className="role-info">
              📈 Can oversee projects and team performance.
            </p>
            <p className="role-info">
              🔄 Has access to resource allocation tools.
            </p>
          </>
        );
      case "user":
        return (
          <>
            <p className="role-info">
              ✅ Can access their account and personal data.
            </p>
            <p className="role-info">
              📄 Limited access to application features.
            </p>
          </>
        );
      default:
        return (
          <p className="role-info">👤 Guest access: Limited privileges.</p>
        );
    }
  };

  return (
    <>
      <DashNavbar />
      <div className="profile-page">
        {user === "" ? (
          <div className="login-reminder">
            <h1>Please log in again to view your profile</h1>
            <Link to="/login" className="back-button-link">
              <button className="back-button">Back to Login</button>
            </Link>
          </div>
        ) : (
          <div className="profile-card-container">
            <div className="profile-card">
              <div className="profile-image-container">
                <img
                  src={profile.image || defaultProfile.image}
                  alt="User Profile"
                  className="profile-image"
                />
              </div>
              <div className="profile-details">
                <h2 className="user-name">{profile.name}</h2>
                <p className="user-email">📧 {profile.email}</p>
                <p className="user-role">🛠 Role: {profile.role}</p>
                <div className="role-specific-info">
                  {getRoleSpecificInfo(profile.role)}
                </div>
              </div>
            </div>
            <Link to="/dashboard" className="back-button-link">
              <button className="back-button">Back to Dashboard</button>
            </Link>
          </div>
        )}

<div className="mygroups">
        <MyGroups />
      </div>
      </div>
     
    </>
  );
};

export default UserProfile;
