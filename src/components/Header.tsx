import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const isActive = (path: string) => location.pathname === path;

    const navLinks = [
        { path: '/', label: 'About' },
        { path: '/blog', label: 'Blog' },
        { path: '/publications', label: 'Publications' },
        { path: '/projects', label: 'Projects' },
        { path: '/academics', label: 'Academics' },
    ];

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-content">
                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                >
                    <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                </button>
                <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
                    {navLinks.map(({ path, label }) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={handleLinkClick}
                            className={`nav-link ${isActive(path) ? 'nav-link-active' : ''}`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
