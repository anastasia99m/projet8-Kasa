import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error'
import About from './pages/About'
import FicheLogement from './pages/FicheLogement'

function App() {
    return (
    <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fiche/:id" element={<FicheLogement />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
    </Router>
    )}
    
export default App 