import React, {useEffect, useState} from 'react';
import {FaGithub, FaHome} from 'react-icons/fa';
import './SpringSecurityTests.css';

import contentController from '../images/SpringSecurityTests/contentcontroller.png'
import discountService from '../images/SpringSecurityTests/discountservice.png'
import palindrome from '../images/SpringSecurityTests/palindrome.png'
import registrationController from '../images/SpringSecurityTests/registrationcontroller.png'
import {useNavigate} from "react-router-dom";

const SpringSecurityTests = () => {
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
            src: contentController,
            alt: 'Pages',
            caption: 'Pages',
            description: 'The ContentController defines routes for the main, user, admin, and login pages using Spring MVC. It serves different views based on user roles.\n' +
                'The ContentControllerTest uses Spring Boot and MockMvc to test access to these pages. It ensures public pages are reachable without login, and that role-protected pages (like /user/home and /admin/home) are only accessible by authenticated users with the correct roles.\n'
        },
        {
            src: registrationController,
            alt: 'Registration',
            caption: 'Registration',
            description: 'The RegistrationController handles user registration. It saves users to the database with encrypted passwords and returns the saved user. It also catches input-related errors.\n' +
                'The RegistrationControllerTest uses MockMvc to test registration logic. It verifies that valid users are saved correctly with hashed passwords and that missing data triggers an error response.'
        },
        {
            src: discountService,
            alt: 'Discount',
            caption: 'Discount',
            description: 'The DiscountService calculates discounts based on promo codes and the current year. It applies special offers like 10% off for "THANKSGIVING" and 25% off for "XMAS" in 2025.\n' +
                'The DiscountServiceTest uses Spring Boot and Mockito to verify that discounts are correctly calculated. It mocks the current year to test time-dependent logic, ensuring accurate results for different promo scenarios.'
        },
        {
            src: palindrome,
            alt: 'Palindrome',
            caption: 'Palindrome',
            description: 'The StringProcessorService checks if a given string is a palindrome by comparing it to its reversed version.\n' +
                'The StringProcessorServiceTest verifies this logic with valid, invalid, and null inputs. It ensures the method behaves correctly and throws an exception when input is null.'
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
                <h2>Unit testing</h2>
                <p>
                    This project covers tests for spring security login system with roles attached to users being saved to database.
                </p>
            </section>

            <section className="repo-links">
                <a href="https://github.com/Sarhad127/SpringSecurityTests.git" target="_blank" rel="noopener noreferrer" className="repo-link">
                    <FaGithub size={24} />
                    <span>Repository</span>
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

export default SpringSecurityTests;