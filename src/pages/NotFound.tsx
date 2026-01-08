import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', paddingTop: 'var(--spacing-lg)' }}>
            <h1 style={{ fontSize: '4rem', marginBottom: 'var(--spacing-xs)' }}>404</h1>
            <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--spacing-md)' }}>
                Page not found
            </p>
            <Link to="/">Go back home</Link>
        </div>
    );
};

export default NotFound;
