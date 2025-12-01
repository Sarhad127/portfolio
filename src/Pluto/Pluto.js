import React, {useEffect, useState} from 'react';
import {FaGithub, FaHome} from 'react-icons/fa';
import '../Style/Apps.css';
import dashboard from '../images/Pluto/dashboard.png';
import calender from '../images/Pluto/calender.png';
import login from '../images/Pluto/login.png';
import notes from '../images/Pluto/notes.png';
import profile from '../images/Pluto/profile.png';
import schema from '../images/Pluto/schema.png';
import signup from '../images/Pluto/sign up.png';
import diagram from '../images/Pluto/diagram.png'
import {useNavigate} from "react-router-dom";
import signature from "../images/signature.png";

const Pluto = () => {
    const navigate = useNavigate();
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBackClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/');
    };

    const openModal = (index) => {
        setSelectedImageIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
        document.body.style.overflow = 'auto';
    };

    const prevImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const images = [
        {
            src: login,
            alt: 'Login',
            caption: 'Login Page',
            description: 'A login page where users sign in with email or OAuth. It includes password visibility toggle, a “Remember Me” option, and adapts to saved user preferences. Users are guided to accept invitations, verify email, or go to the home page after login. Errors are clearly shown, and signup is available.\n'
        },
        {
            src: signup,
            alt: 'Sign Up',
            caption: 'Registration Page',
            description: 'A registration page with email, username, and password fields, real-time validation, and clear error messages. Successful signups redirect to email verification.'
        },
        {
            src: dashboard,
            alt: 'Dashboard',
            caption: 'Boards',
            description: 'The Pluto TodoPage is a flexible workspace with customizable columns and detailed tasks. Users can set due dates, colors, tags, text, and avatars, and reorder both tasks and columns via drag-and-drop. Editing opens a modal with a live preview for easy updates. Boards also include a real-time WebSocket chat, letting invited users collaborate instantly.'
        },
        {
            src: profile,
            alt: 'Profile',
            caption: 'User Profile',
            description: 'The profile page lets users update their username, avatar, password, or delete their account. Changes are validated and saved securely, with clear success or error messages. Account deletion requires email confirmation, and OAuth users see tailored options.'
        },
        {
            src: schema,
            alt: 'Schema',
            caption: 'Schedule',
            description: 'The SchedulePage shows a weekly calendar with customizable hourly slots. Users can add or edit events with titles, times, descriptions, and colors via a modal. Overlapping events are prevented, and visible hours can be adjusted and saved for a flexible weekly schedule.'
        },
        {
            src: notes,
            alt: 'Notes',
            caption: 'Notes Feature',
            description: 'The NotesPage is a colorful, user-friendly space for managing notes. Users can add, edit inline, and delete notes with confirmation. Notes load from the server and save automatically, with a sidebar for navigation and smooth focus management for seamless editing.'
        },
        {
            src: calender,
            alt: 'Calendar',
            caption: 'Calendar',
            description: 'The calendar page shows a monthly grid with the current date highlighted. Users can navigate between months and click any day to add or edit calender day.'
        },
        {
            src: diagram,
            alt: 'Diagram',
            caption: 'Relationship Diagram',
            description: 'An overview of the Database Relationship Diagram used in the Spring Boot application.'
        },
    ];

    return (
        <div className="app-container">

            <nav className="app-navbar">
                <div className="navbar-app-content">
                    <img src={signature} alt="SB Signature" className="navbar-signature" />
                    <div className="app-navbar-links">
                    <button onClick={handleBackClick} className="app-nav-button">
                        <FaHome className="app-nav-icon" />
                        <span>Back to Home</span>
                    </button>
                </div>
                </div>
            </nav>

            <section className="project-description">
                <h2>Pluto</h2>
                <p>Pluto is a comprehensive productivity app with boards, schedules, calendars, notes, and user management.</p>
                <ul>
                    <li><strong>Frontend:</strong> React</li>
                    <li><strong>Backend:</strong> Spring Boot</li>
                    <li><strong>Database:</strong> MySQL</li>
                    <li><strong>Deployment:</strong> Docker with CI/CD pipelines</li>
                </ul>
            </section>


            <section className="repo-links">
                <a href="https://github.com/Sarhad127/TODO-Frontend" target="_blank" rel="noopener noreferrer" className="repo-link">
                    <FaGithub size={24} />
                    <span>Frontend Repo</span>
                </a>
                <a href="https://github.com/Sarhad127/email-verification" target="_blank" rel="noopener noreferrer" className="repo-link">
                    <FaGithub size={24} />
                    <span>Backend Repo</span>
                </a>
            </section>

            <div className="image-gallery">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item" onClick={() => openModal(index)}>
                    <div className="image-container">
                            <img src={image.src} alt={image.alt} className="gallery-image" />
                        </div>
                        <div className="image-text">
                            <h3>{image.caption}</h3>
                            <p>{image.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImageIndex !== null && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            &times;
                        </button>
                        <div className="modal-image-container">
                            <img
                                src={images[selectedImageIndex].src}
                                alt={images[selectedImageIndex].alt}
                            />
                            <div className="hover-zone left-zone">
                                <button
                                    className="modal-nav-button prev-button"
                                    onClick={prevImage}
                                    aria-label="Previous Image"
                                >
                                    &#10094;
                                </button>
                            </div>
                            <div className="hover-zone right-zone">
                                <button
                                    className="modal-nav-button next-button"
                                    onClick={nextImage}
                                    aria-label="Next Image"
                                >
                                    &#10095;
                                </button>
                            </div>
                        </div>
                        <div className="modal-text-content">
                            <h3>{images[selectedImageIndex].caption}</h3>
                            <p>{images[selectedImageIndex].description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Pluto;