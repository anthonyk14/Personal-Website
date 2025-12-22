import Bio from '../components/Bio';
import Section from '../components/Section';

const Home = () => {
    return (
        <>
            <Bio />

            <Section title="About Me">
                <p>
                    I'm currently exploring various areas of machine learning, including deep learning,
                    computer vision, and natural language processing. I enjoy building projects and
                    experimenting with different ML frameworks and techniques.
                </p>
            </Section>
        </>
    );
};

export default Home;
