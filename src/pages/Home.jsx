import React from 'react'
import logo from '../assets/logo.png'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4">
      <img src={logo} alt="Spade Barber Studio Logo" className="h-48 w-48 md:h-64 md:w-64 mb-12 drop-shadow-lg rounded-full border-4 border-yellow-400 object-cover" />
      <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center mb-4">
        Confidence <span className="text-yellow-400">Starts Here</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 text-center max-w-2xl drop-shadow mb-8 border-b-2 border-yellow-400 pb-2">
        Walk in for a cut. Walk out with confidence
      </p>
      
      {/* Booking Section */}
      <div className="text-center">
        <a 
          href="https://booksy.com/en-us/410593_georgestyles_barber-shop_30382_staten-island#ba_s=sh_1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-full text-lg md:text-xl hover:bg-yellow-500 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Book Your Appointment
        </a>
        <p className="mt-4 text-gray-300 text-sm md:text-base">
          Quick and easy online booking through Booksy
        </p>
      </div>
    </div>
  )
}

export default Home 