import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import About from './components/About/About';
import Home from './components/Home/Home';
import Award from './components/Awards/Award';
import Scholarships from './components/Scholarships/Scholarships';
import Schemes from './components/Schemes/Schemes';
import Contact from './components/Contact/Contact';
import RTImanual from './components/RTImanual/RTImanual';
import Sitemap from './components/Sitemap/Sitemap';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/scholarships" element={<Scholarships/>}/>
        <Route path="/schemesandpolicies" element={<Schemes/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
    </Router>
  )
}

export default App