import { useEffect } from 'react';
import './Home.css';
import profileImage from './images/profile_picture2.jpg';
import {FaLinkedin, FaGithub, FaEnvelope, FaServer, FaHome, FaProjectDiagram} from 'react-icons/fa';
import {SiSpringboot, SiMysql, SiDocker, SiHtml5, SiCss3, SiJavascript, SiDotnet } from 'react-icons/si';
import {FaAddressBook, FaCode, FaReact, FaUser} from "react-icons/fa6";
import dashboardImage from './images/Pluto/dashboard.png';
import Clique from './images/Clique/groupchat.png';
import {Link} from "react-router-dom";
import emailjs from '@emailjs/browser';

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
        { name: 'Spring Boot', icon: <SiSpringboot />, level: 95 },
        { name: 'MySQL', icon: <SiMysql />, level: 80 },
        { name: 'Docker', icon: <SiDocker />, level: 70 },
        { name: 'REST APIs', icon: <FaCode />, level: 95 },
        { name: 'C#', icon: <SiDotnet   />, level: 90 },
        { name: 'Microservices', icon: <FaServer />, level: 50 },
        { name: 'React', icon: <FaReact />, level: 85 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 80 },
        { name: 'HTML & CSS', icon: (
                <span style={{ display: 'flex', gap: '4px' }}>
            <SiHtml5 /> <SiCss3 />
        </span>
            ), level: 90 },
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
                        <h1 className="greeting"><span className="highlight">Sarhad Bahrami</span></h1>
                        <h2 className="title">Java Backend Developer from Nackademin.</h2>
                        <p className="summary">
                            A software developer with a focus on both backend and frontend development.
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
                <h2 className="section-title animate-on-load">Projects</h2>
                <div className="projects-grid animate-on-load">
                    <div className="project-card">
                        <Link to="/pluto">
                        <div
                            className="project-placeholder pluto-project"
                            style={{ backgroundImage: `url(${dashboardImage})` }}
                        >
                            {/*<span className="project-label">Pluto</span>*/}
                        </div>
                        </Link>
                    </div>
                    <div className="project-card">
                        <Link to="/Clique">
                            <div
                                className="project-placeholder Clique-project"
                                style={{ backgroundImage: `url(${Clique})` }}
                            >
                                {/*<span className="project-label">Clique</span>*/}
                            </div>
                        </Link>
                    </div>
                    <div className="project-card">
                        <div className="project-placeholder">
                            <span className="project-label">In Development</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="section about-section">
                <h2 className="section-title animate-on-load">About Me</h2>
                <div className="about-content animate-on-load">
                    <p>
                        I'm a software developer passionate about both backend and frontend development. I mainly work with Java, Spring Boot, and MySQL, and build modern UIs using React and JavaScript. I enjoy creating fullstack applications with various languages and constantly exploring new tools.
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
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </section>
        </div>
    );
}

export default Home;