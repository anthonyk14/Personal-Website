import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
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
                <Footer />
            </div>
        </Router>
    );
}

export default App;
