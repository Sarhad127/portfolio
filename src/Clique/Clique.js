import React, {useEffect, useState} from 'react';
import {FaGithub, FaHome} from 'react-icons/fa';
import login from '../images/Clique/login.png';
import signup from '../images/Clique/register.png';
import home from '../images/Clique/home.png';
import profile from '../images/Clique/profile.png';
import friends from '../images/Clique/friends.png';
import chat from '../images/Clique/chat.png';
import groupChat from '../images/Clique/groupchat.png';
import background from '../images/Clique/background.png';
import '../Style/Apps.css'
import {useNavigate} from "react-router-dom";

const Clique = () => {
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
            src: home,
            alt: 'Home',
            caption: 'Home Page',
            description: 'A clean home page featuring login and registration buttons. The background images transition smoothly every 5 seconds with a swipe animation.'
        },
        {
            src: login,
            alt: 'Login',
            caption: 'Login Page',
            description: 'Users can log in, register, or use the forgotten password feature with email verification. The page includes a "Remember Me" option and a "Show Password" toggle.'
        },
        {
            src: signup,
            alt: 'Sign Up',
            caption: 'Registration Page',
            description: 'Users can sign up using their email (which serves as the unique identifier), username, and double password input for added security.'
        },
        {
            src: chat,
            alt: 'Chat',
            caption: 'Chat Page',
            description: 'Chats are displayed in the second container, showing the friend\'s username, timestamp of the last message, and a preview of the message (indicating whether it was sent by you or the friend).'
        },
        {
            src: groupChat,
            alt: 'Group Chat',
            caption: 'Group Chat Page',
            description: 'Group chats are displayed in the second container with user avatars, group titles, and last message previews. The chat box shows messages with usernames, avatars, and timestamps. The right panel displays group information including title, members, and options to invite friends, change the group background, or leave the group. If a member isn\'t already a friend, an "Add Friend" button appears.'
        },
        {
            src: background,
            alt: 'Background',
            caption: 'Background',
            description: 'A simple interface for changing chat backgrounds. Each background is unique to its specific group chat.'
        },
        {
            src: profile,
            alt: 'Profile',
            caption: 'Profile Page',
            description: 'Users can customize their profile by changing their avatar, updating their username, and adding a personal description.'
        },
        {
            src: friends,
            alt: 'Friends',
            caption: 'Friends Page',
            description: 'Displays the friends list in the second container, with detailed friend information on the right side. Features include: starting a chat, removing friends, and adding new friends.'
        },
    ];

    return (
        <div className="app-container">

            <nav className="app-navbar">
                <div className="navbar-app-content">
                    <div className="app-navbar-links">
                        <button onClick={handleBackClick} className="app-nav-button">
                            <FaHome className="app-nav-icon" />
                            <span>Back to Home</span>
                        </button>
                    </div>
                </div>
            </nav>

            <section className="project-description">
                <h2>Clique</h2>
                <p>
                    Clique is a full-featured chat application that uses WebSockets for real-time communication, enabling users to sign up, log in, add friends, and start one-on-one or group conversations with instant message updates.
                </p>
            </section>

            <section className="repo-links">
                <a href="https://github.com/Sarhad127/Clique-Frontend" target="_blank" rel="noopener noreferrer" className="repo-link">
                    <FaGithub size={24} />
                    <span>Frontend Repo</span>
                </a>
                <a href="https://github.com/Sarhad127/Clique-Backend" target="_blank" rel="noopener noreferrer" className="repo-link">
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

export default Clique;