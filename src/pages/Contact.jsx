import React from 'react'

const business = {
  name: 'GeorgeStyles',
  address: '120 Sand Ln, Staten Island, 10305',
  phone: '(347) 277-4661',
  phoneHref: 'tel:13472774661',
  hours: [
    { day: 'Sunday', time: '11:00 AM - 06:00 PM' },
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday', time: '09:30 AM - 08:00 PM' },
    { day: 'Wednesday', time: '09:30 AM - 08:00 PM' },
    { day: 'Thursday', time: '09:30 AM - 08:00 PM' },
    { day: 'Friday', time: '09:00 AM - 08:00 PM' },
    { day: 'Saturday', time: '09:00 AM - 08:00 PM' },
  ]
}

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const todayIdx = new Date().getDay()
const todayName = daysOfWeek[todayIdx]

const Contact = () => {
  return (
    <div className="min-h-screen pt-16 px-4 md:px-8 flex items-center justify-center">
      <div className="max-w-lg w-full mx-auto bg-black/60 rounded-xl p-6 md:p-10 border border-yellow-400 shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-white flex items-center justify-center gap-2 mb-1">
            {business.name}
            <span role="img" aria-label="barber pole">💈</span>
          </h1>
          <p className="text-gray-200 text-base">{business.address}</p>
        </div>
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl text-yellow-400">📱</span>
            <span className="text-gray-100 text-lg font-semibold">{business.phone}</span>
          </div>
          <a
            href={business.phoneHref}
            className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg shadow hover:bg-yellow-500 transition text-center"
          >
            Call
          </a>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Business Hours</h2>
          <div className="divide-y divide-yellow-400 bg-black/30 rounded-lg overflow-hidden">
            {business.hours.map((h) => (
              <div
                key={h.day}
                className={`flex justify-between px-4 py-2 text-gray-100 ${h.day === todayName ? 'font-bold text-yellow-400' : ''}`}
              >
                <span>{h.day}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 