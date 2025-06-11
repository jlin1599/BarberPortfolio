import React from 'react'
import logo from '../assets/logo.png'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4">
      <img src={logo} alt="Spade Barber Studio Logo" className="h-40 w-40 mb-8 drop-shadow-lg rounded-full border-4 border-yellow-400 object-cover" />
      <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center mb-4">
        Welcome to Our <span className="text-yellow-400">Barber Shop</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 text-center max-w-2xl drop-shadow">
        Where <span className="text-yellow-400 font-semibold">Style</span> Meets Tradition
      </p>
    </div>
  )
}

export default Home 