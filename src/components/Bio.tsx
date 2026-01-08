import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Bio = () => {
    return (
        <section style={{ marginBottom: 'var(--spacing-lg)' }}>
            <div className="flex gap-sm" style={{ alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>Anthony Kim</h1>
                    <div style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                        <p>
                            High school student interested in machine learning and artificial intelligence.
                        </p>
                        <p>
                            Hi 👋! I'm passionate about exploring how computers can learn and solve complex problems.
                            I'm currently learning about neural networks, computer vision, and natural language processing.
                        </p>
                        <p>
                            In my free time, I work on personal ML projects and enjoy reading research papers to stay
                            up-to-date with the latest developments in AI.
                        </p>
                    </div>
                    <div className="flex gap-sm" style={{ marginTop: 'var(--spacing-sm)', fontSize: '1.2rem' }}>
                        <a href="mailto:anthonyk@westbournecollege.com.au" aria-label="Email" style={{ color: 'var(--color-text)' }}><FaEnvelope /></a>
                        <a href="https://github.com/OzG71LXXeKVjzhP8LLWaYM4bo" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--color-text)' }}><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/anthony-k-a071a3325/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--color-text)' }}><FaLinkedin /></a>
                    </div>
                </div>
                <div style={{ flexShrink: 0, marginLeft: 'var(--spacing-md)' }}>
                    <div style={{
                        width: '200px',
                        height: '200px',
                        backgroundColor: 'var(--color-border)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                            <img src="/Personal-Website/portrait.jpg" alt="Anthony Kim" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bio;
