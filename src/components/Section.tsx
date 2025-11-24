import React from 'react';

interface SectionProps {
    title?: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <section style={{ marginBottom: 'var(--spacing-lg)' }}>
            {title && <h2 style={{
                fontSize: '1.5rem',
                borderBottom: 'none',
                marginBottom: 'var(--spacing-sm)',
                marginTop: '0'
            }}>{title}</h2>}
            {children}
        </section>
    );
};

export default Section;
