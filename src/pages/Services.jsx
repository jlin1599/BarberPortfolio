import React from 'react'

const services = [
  {
    name: "Men's Haircut",
    description: "Any type of haircut: fades, tape ups, mohawk, bursts, Cesar wave cuts, and more.",
    price: "$35.00+",
    duration: "30min"
  },
  {
    name: "Men's Haircut W. Beard",
    description: "Men's Haircut with Beard Trim and Eyebrows.",
    price: "$45.00+",
    duration: "40min"
  },
  {
    name: "Men's Haircut W. Scissor trim",
    description: "This service requires a little more time with scissor detail haircuts included.",
    price: "$40.00",
    duration: "35min"
  },
  {
    name: "Line Up and Beard",
    description: "Line up with beard trim for a sharp, clean look.",
    price: "$25.00+",
    duration: "30min"
  },
  {
    name: "Men's Haircut W. Enhancements",
    description: "Haircut with enhancements for a sharp, defined look.",
    price: "$40.00+",
    duration: "40min"
  },
  {
    name: "Men's Haircut W. Beard and Enhancements",
    description: "Haircut with beard trim and enhancements included.",
    price: "$50.00+",
    duration: "50min"
  },
  {
    name: "Men's Haircut W. Beard and Hot Towel",
    description: "Haircut with beard trim and hot towel shave.",
    price: "$55.00",
    duration: "50min"
  },
  {
    name: "Men's Haircut W. Beard and Scissor trim",
    description: "Haircut with beard trim and scissor detailing.",
    price: "$50.00",
    duration: "45min"
  },
  {
    name: "Kids Haircuts",
    description: "12 & under. Gentle and stylish cuts for kids.",
    price: "$30.00+",
    duration: "25min"
  },
  {
    name: "2 Kids Haircut",
    description: "This is a service for 2 kids 12 & under.",
    price: "$60.00",
    duration: "1h"
  },
  {
    name: "Daddy&Me",
    description: "This includes a Haircut for Dad and Son.",
    price: "$65.00+",
    duration: "55min"
  },
  {
    name: "Line Up",
    description: "Crisp line up for a fresh look.",
    price: "$20.00+",
    duration: "20min"
  },
  {
    name: "After Hours/Days Off Haircut",
    description: "For after hours or days off. (Must Text Me) Any haircut with enhancements included.",
    price: "$65.00",
    duration: "35min"
  },
  {
    name: "Full VIP Treatment",
    description: "Luxury service: Haircut, Beard, Eyebrows, Facial Cleanse, Hot Towel shave, and Enhancements.",
    price: "$80.00",
    duration: "1h"
  }
]

const booksyUrl = "https://booksy.com/en-us/410593_georgestyles_barber-shop_30382_staten-island#ba_s=sh_1"

const Services = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-white">Services</h1>
      <div className="space-y-6">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between bg-black/60 rounded-xl shadow p-4 md:p-5 border border-yellow-400">
            <div className="flex-1">
              <h2 className="text-lg md:text-xl font-semibold text-yellow-400 mb-1">{service.name}</h2>
              <p className="text-gray-200 text-sm mb-2 md:mb-0">{service.description}</p>
            </div>
            <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start min-w-[100px] md:min-w-[120px] mt-3 md:mt-0 md:ml-6">
              <div className="flex flex-col items-start md:items-end">
                <span className="text-base md:text-lg font-bold text-yellow-400">{service.price}</span>
                <span className="text-xs text-gray-300">{service.duration}</span>
              </div>
              <a
                href={booksyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 md:ml-0 md:mt-2 bg-yellow-400 text-black font-semibold px-3 py-1 rounded hover:bg-yellow-500 transition text-center text-sm"
              >
                Book
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services 