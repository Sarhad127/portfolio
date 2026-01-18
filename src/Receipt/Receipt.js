import React, {useEffect, useState} from 'react';
import {FaGithub, FaHome} from 'react-icons/fa';
import '../Style/Apps.css'
import {useNavigate} from "react-router-dom";
import signature from "../images/signature.png";
import receipt from "../images/Receipt/kvitto-login.png"
import receipt2 from "../images/Receipt/kvitto-scan.png"
import receipt3 from "../images/Receipt/kvitto-scan-2.png"
import receipt4 from "../images/Receipt/kvitto-edit.png"
import receipt6 from "../images/Receipt/kvitto-statistik.png"
import receipt7 from "../images/Receipt/kvitto-saved.png"
import receipt8 from "../images/Receipt/kvitto-history.png"

const Receipt = () => {
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
            src: receipt,
            alt: 'Receipt',
            caption: 'Login',
            description: 'Login page with email-based registration and verification code validation.'
        },
        {
            src: receipt2,
            alt: 'Receipt 2',
            caption: 'Scanning page',
            description: 'Page where the user can upload a receipt image for scanning.'
        },
        {
            src: receipt3,
            alt: 'Receipt 3',
            caption: 'Scanned',
            description: 'Scanned information is displayed. The user can view raw OCR data using the toggle switch and able to modify the tables scanned.'
        },
        {
            src: receipt7,
            alt: 'Receipt 7',
            caption: 'Saved receipts',
            description: 'All saved receipts are displayed in a list or grid layout with multiple size options. Powerful filters allow you to quickly find specific receipts. Selecting a receipt enables full editing of all receipt details.'
        },
        {
            src: receipt8,
            alt: 'Receipt 8',
            caption: 'History receipts',
            description: 'All receipts get placed in history and saving a receipt from history marks the green dot. User can remove, scan again and save receipts from history without affecting the saved ones.'
        },
        {
            src: receipt4,
            alt: 'Receipt 4',
            caption: 'Editable receipts',
            description: '(User dark themed) Saved receipts can be modified. The user can view raw OCR data using the toggle switch and able to modify the tables scanned.'
        },
        {
            src: receipt6,
            alt: 'Receipt 6',
            caption: 'Statistics',
            description: '(User dark themed) Statistics page that calculates data from all saved receipts (not from history).'
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
                <h2>Huskvitton</h2>
                <p>
                    Huskvitton is a full-featured receipt management app using OCR to extract text from uploaded receipts. Users can sign up, log in, upload receipt images, view scanned information in list or raw format, and track their history and saved receipts with quick access to both text and images.
                </p>
                <ul>
                    <li><strong>Frontend:</strong> React & React Native</li>
                    <li><strong>Backend:</strong> Spring Boot</li>
                    <li><strong>Microservice:</strong> Python</li>
                    <li><strong>Database & Cloud Storage:</strong> MySQL & Firebase</li>
                </ul>
            </section>

            <section className="repo-links">
                <a href="https://github.com/Sarhad127/receipt-frontend-react" target="_blank" rel="noopener noreferrer" className="repo-link">
                    <FaGithub size={24} />
                    <span>Frontend Repo</span>
                </a>
                <a href="https://github.com/Sarhad127/receipt-backend-java" target="_blank" rel="noopener noreferrer" className="repo-link">
                    <FaGithub size={24} />
                    <span>Java Backend Repo</span>
                </a>
                <a href="https://github.com/Sarhad127/receipt-backend-python" target="_blank" rel="noopener noreferrer" className="repo-link">
                    <FaGithub size={24} />
                    <span>Python Backend Repo</span>
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

export default Receipt;