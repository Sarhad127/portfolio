import React, {useEffect, useState} from 'react';
import {FaGithub, FaHome} from 'react-icons/fa';
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
            description: 'The login page lets users enter their email and password to access their account. It includes a toggle to show or hide the password and a "Remember Me" option that decides whether the login token is saved in localStorage or sessionStorage. The background changes based on saved user preferences, and if the user has a pending invitation, a message informs them to log in to accept it. When the user submits the form, the credentials are sent to the server for verification. If successful, the user is redirected either to accept the invitation, verify their email if unverified, or to the home page. Any errors from the server or network are shown clearly. The page also supports login through Google and GitHub OAuth, preserving the "Remember Me" setting and any pending invitation state. A link is provided for users without an account to sign up.\n'
        },
        {
            src: signup,
            alt: 'Sign Up',
            caption: 'Registration Page',
            description: 'The registration page allows users to create an account by entering their email, username, password, and confirming the password. All fields are required and validated, ensuring the passwords match before proceeding. If there’s an error, a message appears immediately. When the information is valid, it’s sent to the server for registration, and upon success, the user is redirected to an email verification page. Any server errors are also shown on the page. The background adapts based on user preferences stored locally, and there is a link for users who already have an account to log in.'
        },
        {
            src: dashboard,
            alt: 'Dashboard',
            caption: 'Boards',
            description: 'The Pluto TodoPage offers a powerful and user-friendly workspace for task management within customizable columns. Each task supports setting a due date, choosing a color, assigning tag text and tag color, adding descriptive text, and attaching an avatar for easy identification. Columns come with editable titles and customizable top header colors. Both tasks and columns can be smoothly rearranged using drag-and-drop functionality for maximum flexibility. When editing a task, a modal pops up allowing users to update all these details while showing a small preview of the task, ensuring clear and efficient task customization.\n' +
                '\n' +
                'Additionally, users invited to the board via email invitation can communicate in real-time through an integrated chatbox powered by WebSockets, enabling seamless collaboration and instant messaging within the workspace.\n'
        },
        {
            src: profile,
            alt: 'Profile',
            caption: 'User Profile',
            description: 'The profile page lets users update their username, customize their avatar, change their password, or delete their account. Username and avatar changes are saved to the server with validation and feedback. Password updates require entering the current and new passwords. Account deletion involves a confirmation code sent by email. All actions use secure API calls and provide clear success or error messages. OAuth users see adjusted options accordingly.'
        },
        {
            src: schema,
            alt: 'Schema',
            caption: 'Schedule',
            description: 'The SchedulePage displays a clean weekly calendar with customizable hourly slots, making it easy to organize events. Users can add or edit events via a modal, setting titles, times, descriptions, and colors for quick identification. Overlapping events are prevented to keep the schedule clear. The visible hours can be adjusted to fit personal routines and are saved for convenience, providing a simple and flexible way to manage weekly plans.\n'
        },
        {
            src: notes,
            alt: 'Notes',
            caption: 'Notes Feature',
            description: 'The NotesPage provides a colorful, easy-to-use space for managing notes. Users can add new notes by selecting from a preset color palette, edit note text inline with a simple toggle, and delete notes with confirmation. Notes load from the server on page load and are saved automatically on edit. The interface includes a sidebar for navigation and uses smooth focus management for editing, ensuring a seamless note-taking experience.\n'
        },
        {
            src: calender,
            alt: 'Calendar',
            caption: 'Calendar',
            description: 'The calendar page shows a monthly grid with the current date highlighted. Users can navigate between months and click any day to add or edit calender day.'
        },
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
                <h2>Pluto</h2>
                <p>
                    Pluto is a comprehensive productivity application featuring boards, schedules, calendars, notes, and user management systems. It is built with React, Spring Boot, and MySQL, and deployed with Docker using CI/CD pipelines.
                </p>
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