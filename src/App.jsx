import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Menu from './components/Menu/Menu';
import './app.scss';
import {useState} from "react"

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>  
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro menuOpen={menuOpen}/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact />
      </div>
    </div>
  );
}

export default App;