import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/main/Home';
import About from './pages/main/About';
import Header from './pages/main/Header';
import Footer from './pages/main/Footer';
import AboutUs from './pages/scrren/AboutUS';
import Blog from './pages/scrren/Blog';
import Awards from './pages/scrren/Awards';
import Career from './pages/scrren/Career';
import PressEvent from './pages/scrren/PressEvent';
import Contact from './pages/main/Contact';
import Portfolio from './pages/main/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/career" element={<Career />} />
        <Route path="/press-event" element={<PressEvent />} />

        {/* Servicess */}
        <Route path="/press-event" element={<PressEvent />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
