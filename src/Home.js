import { useEffect } from 'react';
import './Home.css';
import profileImage from './images/profile_picture.jpg';
import {FaLinkedin, FaGithub, FaEnvelope, FaFileDownload, FaServer, FaHome, FaProjectDiagram} from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiDocker } from 'react-icons/si';
import {FaAddressBook, FaCode, FaReact, FaUser} from "react-icons/fa6";
import dashboardImage from './images/Pluto/dashboard.png';
import {Link} from "react-router-dom";

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
        { name: 'Spring Boot', icon: <SiSpringboot />, level: 95 },
        { name: 'MySQL', icon: <SiMysql />, level: 80 },
        { name: 'Docker', icon: <SiDocker />, level: 70 },
        { name: 'REST APIs', icon: <FaCode />, level: 95 },
        { name: 'Microservices', icon: <FaServer />, level: 50 },
        { name: 'React', icon: <FaReact />, level: 80 },
    ];

    return (
        <div className="portfolio-container">

            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo"></div>
                    <div className="navbar-links">
                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="nav-link">
                            <FaHome className="nav-icon" /> Home
                        </button>
                        <button onClick={() => scrollToSection('projects')} className="nav-link">
                            <FaProjectDiagram className="nav-icon" /> Projects
                        </button>
                        <button onClick={() => scrollToSection('about')} className="nav-link">
                            <FaUser className="nav-icon" /> About
                        </button>
                        <button onClick={() => scrollToSection('skills')} className="nav-link">
                            <FaCode className="nav-icon" /> Skills
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="nav-link">
                            <FaAddressBook className="nav-icon" /> Contact
                        </button>
                    </div>
                </div>
            </nav>

            <section className="hero-section">
                <div className="hero-content animate-on-load">
                    <div className="profile-image-container">
                        <img src={profileImage} alt="Sarhad Bahrami" className="profile-image" />
                        <div className="image-border"></div>
                    </div>

                    <div className="hero-text">
                        <h1 className="greeting">Hello, I'm <span className="highlight">Sarhad Bahrami</span></h1>
                        <h2 className="title">Java Backend Developer</h2>
                        <p className="summary">
                            I build robust, scalable backend systems with Java and Spring ecosystem.
                            Passionate about clean code, system architecture, and solving complex problems.
                        </p>

                        <div className="cta-buttons">
                            <a href="#contact" className="btn btn-primary">
                                <FaEnvelope /> Contact Me
                            </a>
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

            <section id="projects" className="section projects-section">
                <h2 className="section-title animate-on-load">My Projects</h2>
                <div className="projects-grid animate-on-load">
                    <div className="project-card">
                        <Link to="/pluto">
                        <div
                            className="project-placeholder pluto-project"
                            style={{ backgroundImage: `url(${dashboardImage})` }}
                        >
                            <span className="project-label">Pluto</span>
                        </div>
                        </Link>
                    </div>
                    <div className="project-card">
                        <div className="project-placeholder">
                            <span className="project-label">In Progress</span>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-placeholder">
                            <span className="project-label">In Progress</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="section about-section">
                <h2 className="section-title animate-on-load">About Me</h2>
                <div className="about-content animate-on-load">
                    <p>
                        I'm a passionate software developer specialized in Java and backend technologies like Spring Boot,
                        REST APIs, and MySQL. With a strong foundation in computer science principles, I enjoy building
                        clean, scalable solutions and collaborating in agile teams.
                    </p>
                    <p>
                        Recently, I've completed my education at Nackademin and worked on exciting projects involving
                        microservices architecture, machine learning integration, and secure web development using
                        Spring Security.
                    </p>
                    <p>
                        What drives me is the challenge of solving complex problems and creating efficient systems.
                        I'm always curious, eager to learn, and motivated to contribute to innovative teams working
                        on cutting-edge technologies.
                    </p>
                </div>
            </section>

            <section id="skills" className="section skills-section">
                <h2 className="section-title animate-on-load">Technical Skills</h2>
                <div className="skills-grid animate-on-load">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-icon">{skill.icon}</div>
                            <div className="skill-info">
                                <h3>{skill.name}</h3>
                                <div className="skill-bar">
                                    <div
                                        className="skill-level"
                                        style={{ width: `${skill.level}%` }}
                                        data-level={skill.level}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="contact" className="section contact-section">
                <h2 className="section-title animate-on-load">Get In Touch</h2>
                <form className="contact-form animate-on-load">
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </section>
        </div>
    );
}

export default Home;