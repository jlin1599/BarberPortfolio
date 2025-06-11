import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed w-full z-20 top-0 left-0 bg-black/70 backdrop-blur border-b-2 border-yellow-400 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-center px-6 py-3">
        <div className="flex space-x-8">
          <Link to="/" className="text-gray-200 hover:text-yellow-400 transition-colors font-semibold">Home</Link>
          <Link to="/about" className="text-gray-200 hover:text-yellow-400 transition-colors font-semibold">About</Link>
          <Link to="/services" className="text-gray-200 hover:text-yellow-400 transition-colors font-semibold">Services</Link>
          <Link to="/gallery" className="text-gray-200 hover:text-yellow-400 transition-colors font-semibold">Gallery</Link>
          <Link to="/contact" className="text-gray-200 hover:text-yellow-400 transition-colors font-semibold">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 