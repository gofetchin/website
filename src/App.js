import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Recruit from './components/Recruit';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Recruit />
      <Footer />
    </div>
  );
}

export default App;