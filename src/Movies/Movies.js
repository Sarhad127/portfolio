import React, {useEffect, useState} from 'react';
import {FaGithub, FaHome} from 'react-icons/fa';
import '../Style/Apps.css'
import {useNavigate} from "react-router-dom";
import signature from "../images/signature.png";
import movies from "../images/Movies/Movies.png"
import moviesFavorites from "../images/Movies/MoviesFavorites.png"

const Movies = () => {
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
            src: movies,
            alt: 'Home',
            caption: 'Home',
            description: 'Movies displayed in a grid layout'
        },
        {
            src: moviesFavorites,
            alt: 'Home',
            caption: 'Favorites',
            description: 'All the favorites the user liked'
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
                <h2>Movies</h2>
                <p>
                    A movie app that fetches movie information from an API and displays it in a grid layout. Users can search for movies, add them to their favorites, and all data is saved to local storage.
                </p>
            </section>

            <section className="repo-links">
                <a href="https://github.com/Sarhad127/movies-app-react" target="_blank" rel="noopener noreferrer" className="repo-link">
                    <FaGithub size={24} />
                    <span>Frontend Repo</span>
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

export default Movies;