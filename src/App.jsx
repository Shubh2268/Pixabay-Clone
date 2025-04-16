import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Details from './pages/Details'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Error from './pages/Error'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/*' element={<Error />} /> 
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
