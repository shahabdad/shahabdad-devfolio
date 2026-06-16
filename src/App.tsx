import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Page/Home';
import About from './Component/About';
import Services from './Component/Services';
import Experience from './Component/Experience';
import Projects from './Component/Project';
import Skills from './Component/Skill';
import Team from './Component/Team';
import Contact from './Component/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] pt-16 sm:pt-20 lg:pt-24 transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;