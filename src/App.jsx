import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <div className="min-h-screen bg-[#272639] w-full ">
      <div className="relative">
        <Navbar />
      </div>

      <div className="relative w-full ">
        <Home />
      </div>
    </div>
  )
}

export default App