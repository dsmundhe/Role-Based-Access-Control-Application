import React from 'react';
import './Footer.css'

const Footer = ({ role }) => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Role-Based Access Control!</h2>
                <p>Welcome, {role === 'admin' ? 'Administrator' : 'User'}!</p>
                <div className="footer-links">
                    {role === 'admin' && (
                        <>
                            <a href="#">Admin Dashboard</a>
                            <a href="#">Settings</a>
                        </>
                    )}
                    {role === 'user' && (
                        <>
                            <a href="#">Profile</a>
                            <a href="#">Support</a>
                        </>
                    )}
                </div>
            </div>
            <div className="footer-note">
                <p>© 2024 Your Application. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
