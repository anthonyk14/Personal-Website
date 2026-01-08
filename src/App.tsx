import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Publications from './pages/Publications';
import Projects from './pages/Projects';
import Academics from './pages/Academics';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router basename="/Personal-Website">
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/academics" element={<Academics />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <footer style={{
                    marginTop: 'var(--spacing-lg)',
                    paddingTop: 'var(--spacing-sm)',
                    borderTop: '1px solid var(--color-border)',
                    color: 'var(--color-text-light)',
                    fontSize: '0.9rem'
                }}>
                    <div className="flex justify-between items-center">
                        <p>&copy; {new Date().getFullYear()} Anthony Kim</p>
                        <div className="flex gap-sm" style={{ fontSize: '1.1rem' }}>
                            <a href="mailto:anthonyk@westbournecollege.com.au" aria-label="Email" style={{ color: 'var(--color-text-light)' }}><FaEnvelope /></a>
                            <a href="https://github.com/OzG71LXXeKVjzhP8LLWaYM4bo" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--color-text-light)' }}><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/anthony-k-a071a3325/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--color-text-light)' }}><FaLinkedin /></a>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
