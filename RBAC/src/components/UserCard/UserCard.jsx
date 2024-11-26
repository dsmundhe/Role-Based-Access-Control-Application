import React from "react";
import users from "../../data/users";
import "./UserCard.css"; // Import CSS file for styling
import { Link } from "react-router-dom";
import User from "../../pages/User/User";
import { addUser } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
const UserCard = () => {
  const dispatch = useDispatch();
  const user = useSelector((val) => val.user.userinfo);
  return (
    <div className="user-cards-container">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <img
            src={user.profile.profilePicture}
            alt={`${user.profile.fullName}'s profile`}
            className="user-profile-picture"
          />
          <h3 className="user-name">{user.profile.fullName}</h3>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
          <Link to="/userdata">
            <button onClick={() => dispatch(addUser(user))}
              className="user-data-btn"
              >See Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
