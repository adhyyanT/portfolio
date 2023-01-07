import { useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
function App() {
  const [navEn, setNavEn] = useState(true);
  return (
    <div>
      <NavBar setNavEn={setNavEn} />
      <Home navEn={navEn} />
      <About />
      <Portfolio />
      <Experience />
      <Contact navEn={navEn} />
      <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
