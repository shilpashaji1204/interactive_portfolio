
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {

  return (
    
      <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element = {<About />} />
            <Route path="/work" element = {<Work />} />
            <Route path="/projects" element = {<Projects />} />
            <Route path="/contact" element = {<Contact />} />
          </Routes>
        </Router>
       
      </div>
      
  )
}

export default App
