import React, {useEffect, useState} from 'react';
import {FaGithub, FaHome} from 'react-icons/fa';
import '../Style/Apps.css';
import {useNavigate} from "react-router-dom";
import signature from "../images/signature.png";

import bookList from '../images/Libri/booklist.png';
import bookDetail from '../images/Libri/bookdetails.png';
import bookCart from '../images/Libri/bookcart.png';
import orderSummary from '../images/Libri/ordersummary.png';
import userInfo from '../images/Libri/userinfo.png';
import orderHistory from '../images/Libri/orderhistory.png';
import Favorites from '../images/Libri/favorites.png';
import adminPanel from '../images/Libri/adminpanel.png';

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
            src: bookList,
            alt: 'Book list',
            caption: 'Books',
            description: 'Displays a list of books with images, basic info, and options to favorite or add to cart.'
        },
        {
            src: bookDetail,
            alt: 'Book details',
            caption: 'Book details',
            description: 'Shows detailed information about a book, including metadata, price, description, reviews, and favorite/add-to-cart options.'
        },
        {
            src: bookCart,
            alt: 'Book cart',
            caption: 'Cart',
            description: 'Displays the shopping cart with items, quantities, prices, and allows updates or removal before checkout.'
        },
        {
            src: orderSummary,
            alt: 'Order summary',
            caption: 'Orders summary',
            description: 'Shows a summary of a completed order, including items, user info, shipping, and total cost.'
        },
        {
            src: userInfo,
            alt: 'User information',
            caption: 'User information',
            description: 'Displays a user’s personal information, including name, email, phone, address, and registration date.'
        },
        {
            src: orderHistory,
            alt: 'Order history',
            caption: 'Order history',
            description: 'Displays a user’s past orders, including order details, items purchased, quantities, prices, and status.'
        },
        {
            src: Favorites,
            alt: 'Favorites',
            caption: 'Favorites',
            description: 'Users can view their favorite books in a personal list.'
        },
        {
            src: adminPanel,
            alt: 'Admin panel',
            caption: 'Admin panel',
            description: 'Provides an admin panel to manage users, toggle user activity, and import books into the system.'
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
                <h2>Libri</h2>
                <p>Libri is a role-based book management system where admins manage users and books, and users can browse, buy, and favorite books with access to their order history.</p>
                <ul>
                    <li><strong>Frontend:</strong> React</li>
                    <li><strong>Backend:</strong> Spring Boot</li>
                    <li><strong>Database:</strong> MySQL</li>
                </ul>
            </section>


            <section className="repo-links">
                <a href="https://github.com/Sarhad127/Libri-frontend" target="_blank" rel="noopener noreferrer" className="repo-link">
                    <FaGithub size={24} />
                    <span>Frontend Repo</span>
                </a>
                <a href="https://github.com/Sarhad127/Libri-backend" target="_blank" rel="noopener noreferrer" className="repo-link">
                    <FaGithub size={24} />
                    <span>Backend Repo</span>
                </a>
            </section>

            <div className="image-gallery">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item" onClick={() => openModal(index)}>
                        <div className="image-container">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="gallery-image"
                            />

                            <button
                                className="expand-button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openModal(index);
                                }}
                                aria-label="Enlarge image"
                            >
                                ⤢
                            </button>
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
                    <div
                        className="modal-content image-only"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-image-container">
                            <img
                                src={images[selectedImageIndex].src}
                                alt={images[selectedImageIndex].alt}
                            />

                            <div className="hover-zone left-zone">
                                <button
                                    className="modal-nav-button prev-button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        prevImage();
                                    }}
                                >
                                    &#10094;
                                </button>
                            </div>

                            <div className="hover-zone right-zone">
                                <button
                                    className="modal-nav-button next-button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextImage();
                                    }}
                                >
                                    &#10095;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Pluto;