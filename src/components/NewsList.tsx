const newsItems = [
    { date: "2025", text: "Paper accepted to CoRL 2025 as an Oral presentation!" },
    { date: "2025", text: "Started internship at Google DeepMind." },
    { date: "2024", text: "Awarded the NSF Graduate Research Fellowship." },
    { date: "2024", text: "Graduated from UC Berkeley with Highest Honors." }
];

const NewsList = () => {
    return (
        <ul>
            {newsItems.map((item, index) => (
                <li key={index} style={{ marginBottom: 'var(--spacing-xs)' }}>
                    <span style={{ fontWeight: 'bold', marginRight: 'var(--spacing-sm)' }}>{item.date}</span>
                    <span>{item.text}</span>
                </li>
            ))}
        </ul>
    );
};

export default NewsList;
