import {useEffect, useState} from 'react';
import './Home.css';
import profileImage from './images/profile_picture2.jpg';
import {FaLinkedin, FaGithub, FaEnvelope, FaHome, FaProjectDiagram, FaBars} from 'react-icons/fa';
import {
    SiSpringboot,
    SiMysql,
    SiDocker,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiGithub,
    SiGit, SiPostgresql, SiVite, SiTailwindcss, SiPostman
} from 'react-icons/si';
import {FaAddressBook, FaCode, FaJava, FaReact, FaUser} from "react-icons/fa6";
import dashboardImage from './images/Pluto/dashboard.png';
import Clique from './images/Clique/groupchat.png';
import Receipt from './images/Receipt/test.png'
import {Link} from "react-router-dom";
import emailjs from '@emailjs/browser';
import PlutoIcon from './icons/pluto-icon.png';
import CliqueIcon from './icons/Clique-icon-2.png';
import ReceiptIcon from './icons/receipt-icon.png';
import './Style/Projects.css'
import './Style/Skills.css'
import './Style/Navbar.css'
import './Style/hero.css'
import './Style/About.css'
import './Style/Contact.css'
import './Style/Modal.css'
import signature from './images/signature.png';

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_5x5g596', 'template_tm4bcjr', e.target, '6gAbkHQMLTBgYjurM')
        .then((result) => {
            alert('Message sent successfully!');
            e.target.reset();
        }, (error) => {
            alert('Failed to send message. Please try again later.');
            console.error(error.text);
        });
}


function Home() {
    useEffect(() => {
        const elements = document.querySelectorAll('.animate-on-load');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate');
            }, index * 200);
        });
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const skills = [
        { name: 'Spring Boot', icon: <SiSpringboot /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'HTML', icon: <SiHtml5 /> },
        { name: 'CSS', icon: <SiCss3 /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Git', icon: <SiGit /> },
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
        { name: 'Vite', icon: <SiVite /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'Postman', icon: <SiPostman />}
    ];

    const projects = [
        { name: 'Pluto', image: dashboardImage, link: '/pluto', icon: PlutoIcon },
        { name: 'Clique', image: Clique, link: '/Clique', icon: CliqueIcon },
        { name: 'Huskvitton {In Development}', image: Receipt, link: '/Receipt', icon: ReceiptIcon },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="portfolio-container">

            <nav className="navbar">
                <div className="navbar-container">
                    <img src={signature} alt="SB Signature" className="navbar-signature" />
                    <button className="menu-toggle" onClick={toggleMenu}>
                        <FaBars />
                    </button>
                    <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="nav-link">
                            <FaHome className="nav-icon" /> <span>Home</span>
                        </button>
                        <button onClick={() => scrollToSection('projects')} className="nav-link">
                            <FaProjectDiagram className="nav-icon" /> <span>Projects</span>
                        </button>
                        <button onClick={() => scrollToSection('skills')} className="nav-link">
                            <FaCode className="nav-icon" /> <span>Skills</span>
                        </button>
                        <button onClick={() => scrollToSection('about')} className="nav-link">
                            <FaUser className="nav-icon" /> <span>About</span>
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="nav-link">
                            <FaAddressBook className="nav-icon" /> <span>Contact</span>
                        </button>
                    </div>
                </div>
            </nav>

            <section className="hero-section">
                <div className="hero-content">
                    <div className="profile-image-container">
                        <img src={profileImage} alt="Sarhad Bahrami" className="profile-image" />
                    </div>

                    <div className="hero-text">
                        <h1 className="greeting"><span className="highlight">Sarhad Bahrami</span></h1>
                        <h2 className="title">Junior Full Stack Developer</h2>
                        <p className="summary">
                            A passionate software developer with expertise in both backend and frontend development.
                        </p>
                        <div className="cta-buttons">
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    const contactSection = document.getElementById('contact');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                <FaEnvelope /> Contact Me
                            </button>
                        </div>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/sarhad-bahrami-320590294/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.github.com/Sarhad127" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="section-projects-section">
                <div className="projects-wrapper">
                    <h2 className="section-title-project">Projects</h2>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card">
                                <div className="project-container">
                                    <h3 className="project-name">
                                        <img src={project.icon} alt="" className="project-icon" />
                                        {project.name}
                                    </h3>
                                    <Link to={project.link}>
                                        <div
                                            className="project-image"
                                            style={{ backgroundImage: `url(${project.image})` }}
                                        />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="skills" className="section-skills">
                <h2 className="section-title-skills">Skill Set</h2>
                <ul className="skills-list">
                    {skills.map((skill, index) => (
                        <li key={index} className="skill-item">
                            <div className="skill-icon">{skill.icon}</div>
                            <div className="skill-info">
                                <h3>{skill.name}</h3>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section id="about" className="about">
                <div className="about-wrapper">
                    <h2 className="about-title animate-on-load">About Me</h2>

                    <div className="about-content animate-on-load">
                        <p>
                            I am a fullstack software developer with experience in building reliable backend systems and intuitive frontends.
                            I work primarily with Java, Spring Boot, and MySQL for backend development, and React, JavaScript, and TypeScript
                            for creating dynamic user interfaces. I enjoy developing fullstack applications, integrating tools like Docker,
                            Git, and GitHub, and continuously learning new technologies to create clean, efficient, and maintainable solutions.
                        </p>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact">
                <h2 className="contact-title animate-on-load">Get In Touch</h2>
                <form className="contact-form animate-on-load" onSubmit={sendEmail}>
                    <div className="form-group">
                        <input type="text" name="user_name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" name="user_email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="contact-btn contact-btn-primary">Send Message</button>
                </form>
            </section>
        </div>
    );
}

export default Home;