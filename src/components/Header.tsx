import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <header style={{
            marginBottom: 'var(--spacing-lg)',
            borderBottom: '1px solid var(--color-border)',
            paddingBottom: 'var(--spacing-sm)'
        }}>
            <div className="flex justify-between items-center">
                <nav className="flex gap-sm" style={{ fontSize: '1rem' }}>
                    <Link to="/" style={{ color: isActive('/') ? 'var(--color-text)' : 'var(--color-text-light)', fontWeight: isActive('/') ? '600' : '400' }}>
                        About
                    </Link>
                    <Link to="/blog" style={{ color: isActive('/blog') ? 'var(--color-text)' : 'var(--color-text-light)', fontWeight: isActive('/blog') ? '600' : '400' }}>
                        Blog
                    </Link>
                    <Link to="/publications" style={{ color: isActive('/publications') ? 'var(--color-text)' : 'var(--color-text-light)', fontWeight: isActive('/publications') ? '600' : '400' }}>
                        Publications
                    </Link>
                    <Link to="/projects" style={{ color: isActive('/projects') ? 'var(--color-text)' : 'var(--color-text-light)', fontWeight: isActive('/projects') ? '600' : '400' }}>
                        Projects
                    </Link>
                    <Link to="/academics" style={{ color: isActive('/academics') ? 'var(--color-text)' : 'var(--color-text-light)', fontWeight: isActive('/academics') ? '600' : '400' }}>
                        Academics
                    </Link>
                </nav>
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
