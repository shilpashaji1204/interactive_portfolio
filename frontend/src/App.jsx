
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import TechStack from './pages/TechStack';
import HomePage from './components/HomePage';
import Login from './pages/Login';
import ProjectWorks from './pages/ProjectWorks';
import ShilpaPortfolio from './components/shilpaportfolio';


function App() {

  return (
    
      <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element = {<HomePage />} />
            <Route path="/about" element = {<About />} />
            <Route path="/work" element = {<Work />} />
            <Route path="/projects" element = {<Projects />} />
            <Route path="/contact" element = {<Contact />} />
            <Route path="/techStack" element={<TechStack />} />
            <Route path="/login" element = {<Login />} />
            <Route path='/projectworks' element= {<ProjectWorks />} />
            <Route path='/shilpaportfolio' element= {<ShilpaPortfolio />} />
          </Routes>
          
        </Router>
       
      </div>
      
  )
}

export default App
