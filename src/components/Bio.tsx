import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Bio = () => {
    return (
        <section className="bio">
            <div className="bio-content">
                <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>Anthony Kim</h1>
                <div style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                    <p>
                        High school student interested in machine learning and artificial intelligence.
                    </p>
                    <p>
                        Hi! I'm passionate about exploring how computers can learn and solve complex problems.
                        I'm currently learning about neural networks, computer vision, and natural language processing.
                    </p>
                    <p>
                        In my free time, I work on personal ML projects and enjoy reading research papers to stay
                        up-to-date with the latest developments in AI.
                    </p>
                </div>
                <div className="bio-links">
                    <a href="mailto:anthonyk@westbournecollege.com.au" aria-label="Email"><FaEnvelope /></a>
                    <a href="https://github.com/OzG71LXXeKVjzhP8LLWaYM4bo" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/anthony-k-a071a3325/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                </div>
            </div>
            <div className="bio-portrait">
                <img src="/Personal-Website/portrait.jpg" alt="Anthony Kim" />
            </div>
        </section>
    );
};

export default Bio;
