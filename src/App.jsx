import React from 'react'
import './App.css'
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Game from './pages/Game'
import Leaderboard from './pages/Leaderboard'
import About from './pages/About'

function App() {
  

  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Add more routes here as needed */}
        <Route path="/game" element={<Game />} />
        <Route path="/about" element={<About />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        {/* You can add more pages like About, Leaderboard, etc. */}

      </Route>
    </Routes>
  </BrowserRouter>
      
    </>
  )
}

export default App
