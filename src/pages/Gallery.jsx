import React from 'react'

// Dynamically import all images from each category folder
const fadeImages = Object.values(import.meta.glob('../assets/fade/*.{jpg,jpeg,png,gif}', { eager: true, import: 'default' }))
const taperImages = Object.values(import.meta.glob('../assets/taper/*.{jpg,jpeg,png,gif}', { eager: true, import: 'default' }))
const designImages = Object.values(import.meta.glob('../assets/design/*.{jpg,jpeg,png,gif}', { eager: true, import: 'default' }))
const kidsImages = Object.values(import.meta.glob('../assets/kids/*.{jpg,jpeg,png,gif}', { eager: true, import: 'default' }))

const categories = [
  { name: 'Fades', images: fadeImages },
  { name: 'Tapers', images: taperImages },
  { name: 'Designs', images: designImages },
  { name: 'Kids', images: kidsImages },
]

const Gallery = () => {
  return (
    <div className="min-h-screen pt-16 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10 text-white">Gallery</h1>
        <div className="space-y-8 md:space-y-12">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3 md:mb-4 text-center md:text-left">{cat.name}</h2>
              {cat.images.length === 0 ? (
                <p className="text-gray-400 text-center mb-6 md:mb-8">No images available.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
                  {cat.images.map((src, idx) => (
                    <div key={idx} className="aspect-square overflow-hidden rounded-lg shadow-lg bg-black/40">
                      <img
                        src={src}
                        alt={`${cat.name} ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery 