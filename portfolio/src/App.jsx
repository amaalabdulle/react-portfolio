// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

// React Router imports
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// Pages imports
import Header from './components/Header';
import Home from './pages/Home';
import ProjectsGallery from './pages/ProjectsGallery';
import Contact from './pages/Contact';

function App() {
    return <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects-Gallery" element={<ProjectsGallery />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
    </Router>;
}

export default App