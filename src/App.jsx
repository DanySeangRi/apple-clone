import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Iphone from './pages/Iphone'
const App = () => {
  return (
    <div >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/iphone" element={<Iphone />} />
    </Routes>
    </div>
  )
}

export default App