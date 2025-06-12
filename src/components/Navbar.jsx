import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed w-full z-20 top-0 left-0 bg-black/70 backdrop-blur border-b-2 border-yellow-400 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <Link to="/" className="text-gray-200 hover:text-yellow-400 transition-colors font-semibold text-sm sm:text-base">Home</Link>
          <Link to="/about" className="text-gray-200 hover:text-yellow-400 transition-colors font-semibold text-sm sm:text-base">About</Link>
          <Link to="/services" className="text-gray-200 hover:text-yellow-400 transition-colors font-semibold text-sm sm:text-base">Services</Link>
          <Link to="/gallery" className="text-gray-200 hover:text-yellow-400 transition-colors font-semibold text-sm sm:text-base">Gallery</Link>
          <Link to="/contact" className="text-gray-200 hover:text-yellow-400 transition-colors font-semibold text-sm sm:text-base">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 