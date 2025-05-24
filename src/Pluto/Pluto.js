import React from 'react';
import { FaHome } from 'react-icons/fa';
import './Pluto.css';

import dashboard from '../images/Pluto/dashboard.png';
import calender from '../images/Pluto/calender.png';
import login from '../images/Pluto/login.png';
import notes from '../images/Pluto/notes.png';
import profile from '../images/Pluto/profile.png';
import schema from '../images/Pluto/schema.png';
import signup from '../images/Pluto/sign up.png';
import {useNavigate} from "react-router-dom";

const Pluto = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/');
    };

    const images = [
        { src: dashboard, alt: 'Dashboard', caption: 'Main Dashboard' },
        { src: calender, alt: 'Calendar', caption: 'Calendar View' },
        { src: login, alt: 'Login', caption: 'Login Page' },
        { src: notes, alt: 'Notes', caption: 'Notes Feature' },
        { src: profile, alt: 'Profile', caption: 'User Profile' },
        { src: schema, alt: 'Schema', caption: 'Database Schema' },
        { src: signup, alt: 'Sign Up', caption: 'Registration Page' }
    ];

    return (
        <div className="pluto-container">

            <nav className="pluto-navbar">
                <div className="navbar-pluto-content">
                    <div className="navbar-links">
                    <button onClick={handleBackClick} className="nav-button">
                        <FaHome className="nav-icon" />
                        <span>Back to Home</span>
                    </button>
                </div>
                </div>
            </nav>

            <section className="project-description">
                <h2>Pluto - Productivity Application</h2>
                <p>
                    Pluto is a comprehensive productivity application featuring dashboard, calendar, notes,
                    and user management systems. Built with React, Spring Boot, and MySQL.
                </p>
            </section>

            <div className="image-gallery">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <div className="image-container">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="gallery-image"
                            />
                            <div className="image-overlay">
                                <p className="image-caption">{image.caption}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pluto;