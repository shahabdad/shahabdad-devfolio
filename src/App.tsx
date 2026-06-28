import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Page/Home';
import Resume from './Page/Resume';

function App() {
  const location = useLocation();
  const isResumePage = location.pathname === '/resume';

  return (
    <>
      {!isResumePage && <Navbar />}
      <main className={`min-h-screen bg-white transition-colors duration-300 ${isResumePage ? 'pt-0' : 'pt-16 sm:pt-20 lg:pt-24'}`}>
        <Routes>
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {!isResumePage && <Footer />}
    </>
  );
}

export default App;