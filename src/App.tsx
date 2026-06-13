import Navbar from './Component/Navbar';
import Home from './Page/Home';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-60 pt-3 sm:pt-10 lg:pt-18">
        <Home />  
      </main>
      <Footer />
    </>
  );
}

export default App;