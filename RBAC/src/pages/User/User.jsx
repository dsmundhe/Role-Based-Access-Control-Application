import React from "react";
import "./User.css"; // Updated unique CSS file
import DashNavbar from "../Dashboard/DashNavbar";
import { useSelector } from "react-redux";

const User = () => {
  const user = useSelector((state) => state.user.userinfo); // Access userinfo from Redux

  return (
    <>
      <DashNavbar />
      <div className="user-details-page">
        <h1 className="user-details-title">User Profile</h1>
        {user && user.profile ? (
          <div className="user-details-container">
            {/* Left: Profile Picture */}
            <div className="user-details-image-section">
              <img
                src={user.profile.profilePicture}
                alt={`${user.profile.fullName}'s profile`}
                className="user-details-profile-picture"
              />
            </div>

            {/* Right: User Details */}
            <div className="user-details-info-section">
              <h2 className="user-details-name">{user.profile.fullName}</h2>
              <p className="user-details-field">
                <strong>Username:</strong> {user.username}
              </p>
              <p className="user-details-field">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="user-details-field">
                <strong>Role:</strong> {user.role}
              </p>
              <p className="user-details-field">
                <strong>Status:</strong>{" "}
                <span
                  className={`user-details-status ${
                    user.status === "active" ? "user-details-active" : "user-details-inactive"
                  }`}
                >
                  {user.status}
                </span>
              </p>
              <p className="user-details-field">
                <strong>Address:</strong> {user.profile.address}
              </p>
              <p className="user-details-field">
                <strong>Contact Number:</strong> {user.profile.contactNumber}
              </p>
              <p className="user-details-field">
                <strong>Permissions:</strong> {user.permissions.join(", ")}
              </p>
            </div>
          </div>
        ) : (
          <p className="user-details-no-data">No user data available. Please select a user.</p>
        )}
      </div>
    </>
  );
};

export default User;
