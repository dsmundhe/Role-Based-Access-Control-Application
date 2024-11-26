import React from "react";
import { useSelector } from "react-redux";
import "./MyGroups.css"; // Import your CSS for styling
import { useDispatch } from "react-redux";
import { deleteGroup } from "../../features/userSlice";
const MyGroups = () => {
  // Accessing groups from Redux store
  const myGroups = useSelector((state) => state.user.groups);
  const dispatch = useDispatch();

  const delGroup = (grpname) => {
    dispatch(deleteGroup(grpname));
  };

  return (
    <div className="my-groups-container">
      <h1>My Groups</h1>

      {/* Render groups */}
      {myGroups.length > 0 ? (
        myGroups.map((group) => (
          <div key={group.groupname} className="group-card">
            <h2>
              {group.groupname}{" "}
              <button
                className="delete-btn"
                onClick={() => delGroup(group.groupname)}
              >
                Delete Group
              </button>
            </h2>

            {/* Display members of the group */}
            <div className="members-list">
              {group.members.map((member) => (
                <div key={member.id} className="member-card">
                  <img
                    src={member.profile.profilePicture}
                    alt={member.profile.fullName}
                    className="profile-picture"
                  />
                  <div className="member-info">
                    <span className="member-name">
                      {member.profile.fullName}
                    </span>
                    <span className="member-role">{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No groups found.</p>
      )}
    </div>
  );
};

export default MyGroups;
