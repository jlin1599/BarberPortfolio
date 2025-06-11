import React from 'react'
import aboutImg from '../assets/About.png'

const About = () => {
  return (
    <div className="min-h-screen pt-16 pb-12 px-4 md:px-8 flex flex-col items-center">
      <div className="max-w-3xl w-full mx-auto flex flex-col items-center">
        <img 
          src={aboutImg} 
          alt="George the Barber" 
          className="w-full max-w-md md:max-w-lg h-auto object-cover object-left rounded-xl shadow-lg border-4 border-yellow-400 mb-6" 
        />
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-100">Meet George</h1>
        <p className="text-lg md:text-xl text-gray-200 text-center mb-6 max-w-2xl">
          Hi, my name is <span className="font-semibold text-yellow-400">George</span>. I am a passionate and highly skilled barber with over 18 years of experience in the industry. My mission is simple: when you sit in my chair, you leave not just with a fresh cut, but with renewed confidence and a smile.
        </p>
        <ul className="text-base md:text-lg text-gray-100 mb-6 space-y-3 max-w-xl mx-auto">
          <li className="flex items-start"><span className="text-yellow-400 text-xl mr-2">🔘</span>I take my craft and my time very seriously, ensuring every client gets the attention and detail they deserve.</li>
          <li className="flex items-start"><span className="text-yellow-400 text-xl mr-2">🔘</span>Cleanliness is a top priority, my equipment and workspace are always spotless for your safety and comfort.</li>
        </ul>
        <p className="text-lg md:text-xl text-center text-yellow-400 font-semibold mb-2">‼️ Book with me, you won't regret it! ‼️</p>
        <p className="text-base text-center text-gray-200 max-w-xl">
          Whether you're looking for a classic cut, a modern style, or a complete transformation, I'm here to deliver the best service possible. Your satisfaction is my passion, let's make you look and feel your best!
        </p>
      </div>
    </div>
  )
}

export default About 