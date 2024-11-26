// src/pages/Dashboard/Dashboard.js
import React, { useState } from "react";
import Modal from "react-modal";
import DashNavbar from "./DashNavbar";
import UserCard from "../../components/UserCard/UserCard";
import "./Dashboard.css";
import CreateGroup from "../../components/CreateGroup/CreateGroup";

// Set app element for accessibility
Modal.setAppElement('#root');
const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <DashNavbar handleOpenModal={handleOpenModal} />
      <div className="dash-container">
        <UserCard />

        {/* Modal Component */}

        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Example Modal"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <CreateGroup 
          handleCloseModal={handleCloseModal}
          />
         
        </Modal>
      </div>
    </>
  );
};

export default Dashboard;
