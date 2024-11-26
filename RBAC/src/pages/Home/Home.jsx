import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home-container">
                <div className="home-head">
                    <h1>Welcome to <span>Access.com</span></h1>
                    <p className='home-para'>
                        Role-Based Access Control (RBAC) applications streamline permission management by assigning roles to users based on their responsibilities.
                        This ensures that users can access only the resources necessary for their tasks, organizations can simplify user management, 
                    </p>

                    <div className='home-start-btn'> <button  > <Link to='/signup'>Let's start <FaArrowRight /></Link></button></div>
                </div>
                <div className="home-gallery">
                    <div>
                        <img src="https://i.pinimg.com/736x/ce/9a/08/ce9a0838309a55bf7ffdde4ffa517d5b.jpg" alt="" />
                        <h3>Admin</h3>
                        <p>
                            The Admin oversees user management, assigns roles, and ensures system security and smooth operations.
                        </p>

                    </div>
                    <div>
                        <img src="https://i.pinimg.com/736x/b3/22/00/b32200dee3584479a09ce9bb3a73d49d.jpg" alt="" />
                        <h3>User</h3>
                        <p>
                            The User interacts with the application to access features and perform tasks based on assigned roles and permissions.
                        </p>

                    </div>
                    <div>
                        <img src="https://i.pinimg.com/736x/4e/ae/b0/4eaeb00721272b29d00caa9c6af91e5b.jpg" alt="" />
                        <h3>Manager</h3>
                        <p>
                            The Manager oversees team activities, monitors progress, and ensures goals are achieved efficiently within the application.
                        </p>

                    </div>
                </div>

                <Footer role='admin' />
            </div>
        </>
    )
}

export default Home
