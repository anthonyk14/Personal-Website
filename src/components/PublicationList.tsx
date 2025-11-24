const publications = [
    {
        title: "Efficient Transformers for Long-Horizon Robot Manipulation",
        authors: "Anthony Kim*, Jane Doe*, John Smith",
        venue: "CoRL 2025 (Oral)",
        links: [
            { label: "arXiv", url: "#" },
            { label: "Code", url: "#" },
            { label: "Website", url: "#" }
        ]
    },
    {
        title: "Learning to Navigate in Complex Environments with Vision-Language Models",
        authors: "Anthony Kim, Alice Johnson, Bob Williams",
        venue: "CVPR 2025",
        links: [
            { label: "arXiv", url: "#" },
            { label: "Code", url: "#" },
            { label: "Video", url: "#" }
        ]
    },
    {
        title: "Self-Supervised Representation Learning for Autonomous Driving",
        authors: "Charlie Brown, Anthony Kim, David Miller",
        venue: "ICRA 2024",
        links: [
            { label: "arXiv", url: "#" },
            { label: "Code", url: "#" }
        ]
    }
];

const PublicationList = () => {
    return (
        <div>
            {publications.map((pub, index) => (
                <div key={index} style={{ marginBottom: 'var(--spacing-md)' }}>
                    <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.2rem' }}>
                        {pub.title}
                    </div>
                    <div style={{ color: 'var(--color-text)', marginBottom: '0.2rem' }}>
                        {pub.authors}
                    </div>
                    <div style={{ fontStyle: 'italic', color: 'var(--color-text-light)', marginBottom: '0.3rem' }}>
                        {pub.venue}
                    </div>
                    <div className="flex gap-sm" style={{ fontSize: '0.9rem' }}>
                        {pub.links.map((link, i) => (
                            <a key={i} href={link.url} style={{
                                fontWeight: '600',
                                textDecoration: 'none'
                            }}>
                                [{link.label}]
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PublicationList;
