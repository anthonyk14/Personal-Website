import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Anthony Kim</p>
                <div className="footer-links">
                    <a href="mailto:anthonyk@westbournecollege.com.au" aria-label="Email"><FaEnvelope /></a>
                    <a href="https://github.com/OzG71LXXeKVjzhP8LLWaYM4bo" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/anthony-k-a071a3325/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
