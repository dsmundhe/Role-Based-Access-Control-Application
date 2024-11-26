import React, { useState } from "react";
import users from "../../data/users"; // Assume the user data is in this file
import "./CreateGroup.css"; // Import necessary CSS
import { useDispatch } from "react-redux";
import { addGroup } from "../../features/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateGroup = ({ handleCloseModal }) => {
  const dispatch = useDispatch();
  const [groupName, setGroupName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Handle the change in group name input
  const handleGroupNameChange = (e) => {
    setGroupName(e.target.value);
  };

  // Handle the adding of a user to the group
  const handleAddUser = (user) => {
    setSelectedUsers((prevUsers) => [...prevUsers, user]);
  };

  const handleRemoveUser = (userId) => {
    setSelectedUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== userId)
    );
  };

  const createGroup = () => {
    if (groupName === "") {
      toast.error("Add group name !");
      return;
    }

    if (selectedUsers.length === 0) {
      toast.error("Add users firsrt");
      return;
    }

    dispatch(addGroup({ groupname: groupName, members: selectedUsers }));
    toast.success("Group created successfuly!");
    setSelectedUsers([]);
    setGroupName("");
  };

  return (
    <div className="create-group-container">
      {/* Group Name Section */}
      <div className="group-section">
        <input
          type="text"
          placeholder="Enter Group Name"
          value={groupName}
          onChange={handleGroupNameChange}
          className="group-name-input"
        />
        <button className="group-btn" onClick={createGroup}>
          Create Group
        </button>
        <div className="added-users">
          {selectedUsers.length > 0 && <h3>Added Users:</h3>}
          <ul>
            {selectedUsers.length > 0 ? (
              selectedUsers.map((user) => (
                <div key={user.id} className="user-tag">
                  <span>{user.profile.fullName}</span>
                  <button
                    className="remove-user-btn"
                    onClick={() => handleRemoveUser(user.id)}
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p>No users selected.</p>
            )}
          </ul>
        </div>
      </div>

      {/* Users List Section */}
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <img
              src={user.profile.profilePicture}
              alt={user.profile.fullName}
              className="user-image"
            />
            <div className="user-details">
              <p className="username">{user.profile.fullName}</p>
              <p className="role">{user.role}</p>
            </div>
            <button onClick={() => handleAddUser(user)} className="add-button">
              Add
            </button>
          </div>
        ))}
      </div>
      <button className="modal-action-btn" onClick={handleCloseModal}>
        Close
      </button>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
        className="toastContainer"
      />
    </div>
  );
};

export default CreateGroup;
