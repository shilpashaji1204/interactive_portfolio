
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
import ShilpaPortfolio from './components/ShilpaPortfolio';
import JoshPortfolio from './components/JoshPortfolio';
import Joshwork from './pages/Joshwork';
import RoryPortfolio from './components/RoryPortfolio';
import ProjectTable from './pages/ProjectTable';
axios.defaults.baseURL = `http://localhost:8080/api`


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
            <Route path='/shilpaportfolio' element= {<ShilpaPortfolio />} />
            <Route path='/joshportfolio' element= {<JoshPortfolio />} />
            <Route path='/roryportfolio' element= {<RoryPortfolio />} />
            <Route path="/projecttable" element = {<ProjectTable />} />
          </Routes>
          
        </Router>
       
      </div>
      
  )
}

export default App
