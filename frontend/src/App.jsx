
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
import Registration from './pages/Registration';
import axios from 'axios';
import SampleProjects from './pages/SampleProjects';
axios.defaults.baseURL = `http://localhost:8080/api`
import Computer from './pages/Computer';
import ProjectAnimation from './pages/ProjectAnimation';
import Index from './pages/background/index';
// import background from './pages/background/background';


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
            <Route path="/sampleprojects" element = {<SampleProjects />} />
            <Route path="/contact" element = {<Contact />} />
            <Route path="/techStack" element={<TechStack />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/computer" element = {<Computer />} />
            <Route path="/projectanimation" element = {<ProjectAnimation />} />
            <Route path="/index" element = {<Index />} />
            {/* <Route path="/background" element = {<background />} /> */}

          </Routes>
          
        </Router>
       
      </div>
      
  )
}

export default App
